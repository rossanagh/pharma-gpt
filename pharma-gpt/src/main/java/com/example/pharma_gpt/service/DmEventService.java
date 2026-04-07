package com.example.pharma_gpt.service;

import com.example.pharma_gpt.dto.DirectMessageResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class DmEventService {

    private final Map<String, CopyOnWriteArrayList<SseEmitter>> emittersByEmail = new ConcurrentHashMap<>();

    public SseEmitter register(String email) {
        SseEmitter emitter = new SseEmitter(0L);
        emittersByEmail.computeIfAbsent(email, k -> new CopyOnWriteArrayList<>()).add(emitter);

        Runnable cleanup = () -> remove(email, emitter);
        emitter.onCompletion(cleanup);
        emitter.onTimeout(cleanup);
        emitter.onError(e -> cleanup.run());

        return emitter;
    }

    public void emitToUser(String email, DirectMessageResponse msg) {
        List<SseEmitter> list = emittersByEmail.get(email);
        if (list == null || list.isEmpty()) return;

        for (SseEmitter emitter : list) {
            try {
                emitter.send(SseEmitter.event().name("dm").data(msg));
            } catch (IOException e) {
                remove(email, emitter);
            }
        }
    }

    private void remove(String email, SseEmitter emitter) {
        var list = emittersByEmail.get(email);
        if (list == null) return;
        list.remove(emitter);
        if (list.isEmpty()) {
            emittersByEmail.remove(email);
        }
    }
}

