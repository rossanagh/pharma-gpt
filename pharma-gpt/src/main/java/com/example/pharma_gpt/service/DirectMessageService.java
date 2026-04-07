package com.example.pharma_gpt.service;

import com.example.pharma_gpt.dto.DirectConversationResponse;
import com.example.pharma_gpt.dto.DirectMessageResponse;
import com.example.pharma_gpt.dto.UserSummaryResponse;
import com.example.pharma_gpt.entity.DirectConversation;
import com.example.pharma_gpt.entity.DirectMessage;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.DirectConversationRepository;
import com.example.pharma_gpt.repository.DirectMessageRepository;
import com.example.pharma_gpt.repository.UserRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
public class DirectMessageService {

    private final DirectConversationRepository conversationRepository;
    private final DirectMessageRepository messageRepository;
    private final UserRepository userRepository;
    private final DmEventService dmEventService;
    private final PresenceService presenceService;

    public DirectMessageService(DirectConversationRepository conversationRepository,
                                DirectMessageRepository messageRepository,
                                UserRepository userRepository,
                                DmEventService dmEventService,
                                PresenceService presenceService) {
        this.conversationRepository = conversationRepository;
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
        this.dmEventService = dmEventService;
        this.presenceService = presenceService;
    }

    @Transactional(readOnly = true)
    public List<DirectConversationResponse> listConversations(String currentUserEmail) {
        User me = userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));

        var conversations = conversationRepository.findByUserAIdOrUserBIdOrderByLastMessageAtDesc(me.getId(), me.getId());
        return conversations.stream().map(c -> {
            Long peerId = peerId(c, me.getId());
            User peer = userRepository.findById(peerId).orElse(null);
            var peerSummary = peer == null ? null : toSummary(peer);
            var last = messageRepository.findTopByConversationIdOrderByCreatedAtDesc(c.getId())
                .map(this::toMessageResponse)
                .orElse(null);
            return new DirectConversationResponse(c.getId(), c.getLastMessageAt(), peerSummary, last);
        }).toList();
    }

    @Transactional(readOnly = true)
    public List<DirectMessageResponse> listMessages(String currentUserEmail,
                                                    Long conversationId,
                                                    Instant before,
                                                    int limit) {
        User me = userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        DirectConversation c = conversationRepository.findById(conversationId)
            .orElseThrow(() -> new IllegalArgumentException("Conversation not found"));
        ensureParticipant(c, me.getId());

        int size = Math.max(1, Math.min(limit, 50));
        var page = PageRequest.of(0, size);
        var messages = before == null
            ? messageRepository.listLatestMessages(conversationId, page)
            : messageRepository.listMessagesBefore(conversationId, before, page);
        // Return ascending for UI convenience
        var asc = messages.stream()
            .sorted((a, b) -> a.getCreatedAt().compareTo(b.getCreatedAt()))
            .map(this::toMessageResponse)
            .toList();
        return asc;
    }

    @Transactional
    public DirectMessageResponse sendMessage(String currentUserEmail, Long peerUserId, String content) {
        if (peerUserId == null) throw new IllegalArgumentException("Peer is required");
        String trimmed = content == null ? "" : content.trim();
        if (trimmed.isBlank()) throw new IllegalArgumentException("Message is empty");
        if (trimmed.length() > 2000) throw new IllegalArgumentException("Message too long");

        User me = userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        if (me.getId().equals(peerUserId)) throw new IllegalArgumentException("Cannot message yourself");

        User peer = userRepository.findById(peerUserId)
            .orElseThrow(() -> new IllegalArgumentException("Peer not found"));

        Long a = Math.min(me.getId(), peer.getId());
        Long b = Math.max(me.getId(), peer.getId());

        DirectConversation conversation = conversationRepository.findByUserAIdAndUserBId(a, b)
            .orElseGet(() -> conversationRepository.save(new DirectConversation(a, b)));

        DirectMessage msg = new DirectMessage();
        msg.setConversation(conversation);
        msg.setSenderUserId(me.getId());
        msg.setRecipientUserId(peer.getId());
        msg.setContent(trimmed);
        var saved = messageRepository.save(msg);

        conversation.setLastMessageAt(saved.getCreatedAt());
        conversationRepository.save(conversation);

        DirectMessageResponse dto = toMessageResponse(saved);

        dmEventService.emitToUser(peer.getEmail(), dto);
        dmEventService.emitToUser(me.getEmail(), dto);

        return dto;
    }

    private void ensureParticipant(DirectConversation c, Long userId) {
        if (!userId.equals(c.getUserAId()) && !userId.equals(c.getUserBId())) {
            throw new IllegalArgumentException("Forbidden");
        }
    }

    private Long peerId(DirectConversation c, Long meId) {
        return meId.equals(c.getUserAId()) ? c.getUserBId() : c.getUserAId();
    }

    private UserSummaryResponse toSummary(User u) {
        return new UserSummaryResponse(
            u.getId(),
            u.getEmail(),
            u.getFirstName(),
            u.getLastName(),
            u.getParafa(),
            u.getProviderType(),
            u.getSpecialty(),
            u.getAvatarBytes() != null && u.getAvatarBytes().length > 0,
            presenceService.isOnline(u.getEmail())
        );
    }

    private DirectMessageResponse toMessageResponse(DirectMessage m) {
        return new DirectMessageResponse(
            m.getId(),
            m.getConversation().getId(),
            m.getSenderUserId(),
            m.getRecipientUserId(),
            m.getContent(),
            m.getCreatedAt()
        );
    }
}

