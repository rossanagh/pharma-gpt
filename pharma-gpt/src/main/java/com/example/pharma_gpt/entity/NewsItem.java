package com.example.pharma_gpt.entity;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(
    name = "news_items",
    indexes = {
        @Index(name = "idx_news_published_at", columnList = "published_at"),
        @Index(name = "idx_news_source", columnList = "source")
    },
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_news_url", columnNames = {"url"})
    }
)
public class NewsItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 40)
    private String source; // EMA, ANMDMR, ADR, MS

    @Column(nullable = false, length = 300)
    private String title;

    @Column(nullable = false, length = 1000)
    private String url;

    @Column(name = "published_at", nullable = false)
    private Instant publishedAt;

    /**
     * Textul afișat pe site-ul sursă (ex. ms.ro), păstrat exact pentru UI.
     * Poate fi null pentru înregistrări vechi sau surse fără text dedicat.
     */
    @Column(name = "date_display", length = 160)
    private String dateDisplay;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    public NewsItem() {}

    public NewsItem(String source, String title, String url, Instant publishedAt) {
        this(source, title, url, publishedAt, null);
    }

    public NewsItem(String source, String title, String url, Instant publishedAt, String dateDisplay) {
        this.source = source;
        this.title = title;
        this.url = url;
        this.publishedAt = publishedAt;
        this.dateDisplay = dateDisplay;
    }

    public Long getId() {
        return id;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Instant getPublishedAt() {
        return publishedAt;
    }

    public void setPublishedAt(Instant publishedAt) {
        this.publishedAt = publishedAt;
    }

    public String getDateDisplay() {
        return dateDisplay;
    }

    public void setDateDisplay(String dateDisplay) {
        this.dateDisplay = dateDisplay;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
}

