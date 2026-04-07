package com.example.pharma_gpt.service;

import com.example.pharma_gpt.dto.NewsItemDto;
import com.example.pharma_gpt.entity.NewsItem;
import com.example.pharma_gpt.repository.NewsItemRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.parser.Parser;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

/**
 * Noutăți doar din fluxul RSS oficial EMA (news.xml — același conținut ca ema.europa.eu/en/news).
 * API-ul expune ultimele 5; scanarea periodică adaugă intrări noi din RSS.
 */
@Service
public class NewsAggregationService {

    private static final String SOURCE_EMA = "EMA";
    /** Flux RSS — item-uri sincronizate cu pagina News de pe site. */
    private static final String EMA_NEWS_RSS = "https://www.ema.europa.eu/en/news.xml";
    private static final String EMA_SITE_BASE = "https://www.ema.europa.eu";

    private final NewsItemRepository repo;
    private final NewsNonEmaPurge purgeNonEma;

    public NewsAggregationService(NewsItemRepository repo, NewsNonEmaPurge purgeNonEma) {
        this.repo = repo;
        this.purgeNonEma = purgeNonEma;
    }

    private static final int NEWS_HEADLINES = 5;

    /** Ultimele 5 știri EMA: cea mai recentă prima (ORDER BY published_at DESC). */
    public List<NewsItemDto> latestNews() {
        // Elimină MS/ANMDMR rămase din DB (commit separat — nu depinde de scan reușit).
        purgeNonEma.purgeNonEmaSources();
        return repo.findLatestBySource(SOURCE_EMA, PageRequest.of(0, NEWS_HEADLINES)).stream()
            .map(n -> new NewsItemDto(
                n.getSource(),
                n.getTitle(),
                n.getUrl(),
                n.getPublishedAt(),
                n.getDateDisplay()))
            .toList();
    }

    /** La fiecare oră — verifică RSS-ul EMA pentru articole noi. */
    @Scheduled(cron = "0 0 * * * *", zone = "Europe/Bucharest")
    @Transactional
    public void scanHourly() {
        scanNow();
    }

    @Transactional
    public void scanNow() {
        Instant saveCutoff = Instant.now().minusSeconds(30L * 24 * 3600L);

        purgeNonEma.purgeNonEmaSources();

        List<NewsItem> found = fetchEmaRss();

        for (NewsItem item : found) {
            if (item.getPublishedAt().isBefore(saveCutoff)) {
                continue;
            }
            if (item.getUrl() == null || item.getUrl().isBlank()) {
                continue;
            }
            var existing = repo.findByUrl(item.getUrl());
            if (existing.isPresent()) {
                NewsItem e = existing.get();
                if (item.getPublishedAt().isAfter(e.getPublishedAt())) {
                    e.setPublishedAt(item.getPublishedAt());
                }
                if (item.getDateDisplay() != null && !item.getDateDisplay().isBlank()) {
                    e.setDateDisplay(item.getDateDisplay());
                }
                repo.save(e);
                continue;
            }
            repo.save(item);
        }

        repo.deleteOlderThan(saveCutoff);
    }

    private List<NewsItem> fetchEmaRss() {
        List<NewsItem> out = new ArrayList<>();
        try {
            HttpClient client = HttpClient.newBuilder()
                .followRedirects(HttpClient.Redirect.NORMAL)
                .build();
            HttpRequest req = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create(EMA_NEWS_RSS))
                .header("User-Agent", "Pharma-GPT/1.0 (+news aggregation)")
                .build();
            byte[] bytes = client.send(req, HttpResponse.BodyHandlers.ofByteArray()).body();

            Document xml = Jsoup.parse(new java.io.ByteArrayInputStream(bytes), "utf-8", "", Parser.xmlParser());
            for (Element rssItem : xml.select("item")) {
                String title = rssItem.selectFirst("title") != null ? rssItem.selectFirst("title").text().trim() : "";
                String link = rssItem.selectFirst("link") != null ? rssItem.selectFirst("link").text().trim() : "";
                String pubDate = rssItem.selectFirst("pubDate") != null ? rssItem.selectFirst("pubDate").text().trim() : "";
                if (title.isBlank() || link.isBlank()) {
                    continue;
                }

                Instant published = Instant.now();
                try {
                    published = ZonedDateTime.parse(pubDate, DateTimeFormatter.RFC_1123_DATE_TIME).toInstant();
                } catch (Exception ignored) {
                }
                if (!link.startsWith("http")) {
                    link = URI.create(EMA_SITE_BASE).resolve(link).toString();
                }
                out.add(new NewsItem(SOURCE_EMA, title, link, published, null));
            }
        } catch (Exception ignored) {
        }
        return out;
    }
}
