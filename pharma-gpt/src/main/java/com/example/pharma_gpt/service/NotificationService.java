package com.example.pharma_gpt.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {
    private static final Logger log = LoggerFactory.getLogger(NotificationService.class);

    private final ObjectProvider<JavaMailSender> mailSenderProvider;

    @Value("${pharma.mail.from:no-reply@medicinevidence.com}")
    private String from;

    @Value("${pharma.reset.dev-log-codes:true}")
    private boolean devLogCodes;

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
            return;
        }
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
        }
    }

    /** Placeholder: integrate SMS provider (Twilio/Vonage/etc) when ready. */
    public void sendPasswordResetCodeSms(String phone, String code) {
        if (devLogCodes) {
            log.warn("Password reset SMS code for {}: {}", phone, code);
        }
        // no-op for now
    }
}

