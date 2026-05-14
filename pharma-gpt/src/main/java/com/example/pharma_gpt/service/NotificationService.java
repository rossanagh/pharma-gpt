package com.example.pharma_gpt.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;

@Service
public class NotificationService {
    private static final Logger log = LoggerFactory.getLogger(NotificationService.class);

    private final ObjectProvider<JavaMailSender> mailSenderProvider;
    private final HttpClient http = HttpClient.newBuilder()
        .followRedirects(HttpClient.Redirect.NORMAL)
        .build();

    @Value("${pharma.mail.from:contact@medicinevidence.com}")
    private String from;

    @Value("${pharma.reset.dev-log-codes:true}")
    private boolean devLogCodes;

    /**
     * Optional: if set, we call a PHP mail proxy hosted on your cPanel domain
     * (useful when Render cannot reach your SMTP).
     */
    @Value("${pharma.mail.proxy-url:}")
    private String mailProxyUrl;

    @Value("${pharma.mail.proxy-secret:}")
    private String mailProxySecret;

    public NotificationService(ObjectProvider<JavaMailSender> mailSenderProvider) {
        this.mailSenderProvider = mailSenderProvider;
    }

    public void sendPasswordResetCodeEmail(String to, String code) {
        // In dev, you might not have SMTP; log as fallback.
        if (devLogCodes) {
            log.warn("Password reset code for {}: {}", to, code);
        }
        JavaMailSender mailSender = mailSenderProvider.getIfAvailable();
        if (mailSender == null) {
            // Try proxy if SMTP isn't configured.
            if (mailProxyUrl != null && !mailProxyUrl.isBlank()) {
                sendViaPhpProxy(to, code);
            }
            return;
        }
        // Send async so API responses aren't blocked by SMTP timeouts.
        CompletableFuture.runAsync(() -> {
            try {
                SimpleMailMessage msg = new SimpleMailMessage();
                msg.setFrom(from);
                msg.setTo(to);
                msg.setSubject("MedicinEvidence — password reset code");
                msg.setText("""
                    Your MedicinEvidence password reset code is:

                    %s

                    This code expires in 10 minutes. If you did not request a reset, ignore this email.
                    """.formatted(code));
                mailSender.send(msg);
            } catch (Exception e) {
                // Don't leak delivery failures to attacker; still log for ops.
                log.error("Failed to send reset email to {}", to, e);
                // Fallback to proxy if configured (covers cases where SMTP exists but is blocked)
                if (mailProxyUrl != null && !mailProxyUrl.isBlank()) {
                    sendViaPhpProxy(to, code);
                }
            }
        });
    }

    /**
     * Trimite codul de înregistrare înainte de răspunsul HTTP, ca utilizatorul să primească mailul imediat
     * și ca o eroare SMTP să nu lase contul „în curs” fără mesaj în inbox.
     */
    public void sendRegistrationCodeEmail(String to, String code, int ttlMinutes) {
        if (devLogCodes) {
            log.warn("Registration code for {}: {}", to, code);
        }
        JavaMailSender mailSender = mailSenderProvider.getIfAvailable();
        boolean sent = false;
        if (mailSender != null) {
            try {
                sendRegistrationJavaMail(mailSender, to, code, ttlMinutes);
                sent = true;
            } catch (Exception e) {
                log.error("Failed to send registration email to {}", to, e);
            }
        }
        if (!sent && mailProxyUrl != null && !mailProxyUrl.isBlank()) {
            sent = sendViaPhpProxySync(to, code);
        }
        if (!sent) {
            if (devLogCodes) {
                log.warn(
                    "Registration email not delivered via SMTP/proxy; codul este doar în log (dev). "
                        + "Pentru mail real setează SMTP_HOST sau PHARMA_MAIL_PROXY_URL."
                );
                return;
            }
            throw new IllegalStateException(
                "Nu am putut trimite emailul de verificare. Verifică pe server variabilele SMTP_HOST / SMTP_PASS "
                    + "sau proxy-ul PHARMA_MAIL_PROXY_URL, apoi încearcă din nou. Verifică și folderul Spam."
            );
        }
    }

    private void sendRegistrationJavaMail(
        JavaMailSender mailSender,
        String to,
        String code,
        int ttlMinutes
    ) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(from);
        msg.setTo(to);
        msg.setSubject("MedicinEvidence — cod de activare cont");
        msg.setText("""
            Bun venit pe MedicinEvidence.

            Codul tău de activare (6 cifre) este:

            %s

            Introdu acest cod în aplicație pentru a finaliza crearea contului. Codul expiră în %d minute.
            Dacă nu ai solicitat contul, ignoră acest mesaj.
            """.formatted(code, ttlMinutes));
        mailSender.send(msg);
    }

    private void sendViaPhpProxy(String to, String code) {
        CompletableFuture.runAsync(() -> sendViaPhpProxySync(to, code));
    }

    /** @return true dacă răspunsul HTTP e 2xx */
    private boolean sendViaPhpProxySync(String to, String code) {
        try {
            if (mailProxySecret == null || mailProxySecret.isBlank()) {
                log.error("Mail proxy is configured but pharma.mail.proxy-secret is missing.");
                return false;
            }
            String body = "{\"to\":\"" + jsonEscape(to) + "\",\"code\":\"" + jsonEscape(code) + "\"}";
            HttpRequest req = HttpRequest.newBuilder()
                .uri(URI.create(mailProxyUrl.trim()))
                .header("Content-Type", "application/json")
                .header("X-Proxy-Secret", mailProxySecret.trim())
                .POST(HttpRequest.BodyPublishers.ofString(body))
                .build();
            HttpResponse<String> resp = http.send(req, HttpResponse.BodyHandlers.ofString());
            if (resp.statusCode() < 200 || resp.statusCode() >= 300) {
                log.error("Mail proxy error (status={}): {}", resp.statusCode(), resp.body());
                return false;
            }
            return true;
        } catch (Exception e) {
            log.error("Mail proxy request failed", e);
            return false;
        }
    }

    private static String jsonEscape(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\n", "\\n")
            .replace("\r", "\\r");
    }

    /** Placeholder: integrate SMS provider (Twilio/Vonage/etc) when ready. */
    public void sendPasswordResetCodeSms(String phone, String code) {
        if (devLogCodes) {
            log.warn("Password reset SMS code for {}: {}", phone, code);
        }
        // no-op for now
    }
}

