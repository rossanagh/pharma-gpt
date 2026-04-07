package com.example.pharma_gpt.service;

import com.example.pharma_gpt.dto.*;
import com.example.pharma_gpt.entity.ForumComment;
import com.example.pharma_gpt.entity.ForumLike;
import com.example.pharma_gpt.entity.ForumPost;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.ForumCommentRepository;
import com.example.pharma_gpt.repository.ForumLikeRepository;
import com.example.pharma_gpt.repository.ForumPostRepository;
import com.example.pharma_gpt.repository.UserRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ForumService {

    private final ForumPostRepository postRepository;
    private final ForumCommentRepository commentRepository;
    private final ForumLikeRepository likeRepository;
    private final UserRepository userRepository;
    private final PresenceService presenceService;

    public ForumService(ForumPostRepository postRepository,
                        ForumCommentRepository commentRepository,
                        ForumLikeRepository likeRepository,
                        UserRepository userRepository,
                        PresenceService presenceService) {
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.likeRepository = likeRepository;
        this.userRepository = userRepository;
        this.presenceService = presenceService;
    }

    @Transactional(readOnly = true)
    public List<ForumPostResponse> listPosts(String currentUserEmail, int limit, String sort) {
        User me = userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));

        int size = Math.max(1, Math.min(limit, 50));
        boolean popular = sort != null && sort.equalsIgnoreCase("popular");
        List<ForumPost> posts;
        if (popular) {
            List<Long> popularIds = postRepository.listPopularPostIds(size);
            if (popularIds.isEmpty()) {
                posts = List.of();
            } else {
                Map<Long, ForumPost> byId = postRepository.findAllById(popularIds).stream()
                    .collect(Collectors.toMap(ForumPost::getId, Function.identity()));
                posts = popularIds.stream().map(byId::get).filter(Objects::nonNull).toList();
            }
        } else {
            posts = postRepository.listLatest(PageRequest.of(0, size));
        }

        var authorIds = posts.stream().map(ForumPost::getAuthorUserId).distinct().toList();
        Map<Long, User> authors = userRepository.findAllById(authorIds).stream()
            .collect(Collectors.toMap(User::getId, Function.identity()));

        List<ForumPostResponse> rows = posts.stream().map(p -> {
            User author = authors.get(p.getAuthorUserId());
            long likes = likeRepository.countByPostId(p.getId());
            boolean likedByMe = likeRepository.existsByPostIdAndUserId(p.getId(), me.getId());
            long comments = commentRepository.countByPostId(p.getId());
            return new ForumPostResponse(
                p.getId(),
                p.getCreatedAt(),
                author == null ? null : toSummary(author),
                p.getTitle(),
                p.getContent(),
                likes,
                likedByMe,
                comments
            );
        }).toList();

        if (popular) {
            return rows.stream()
                .sorted(Comparator.comparingLong(ForumPostResponse::likeCount)
                    .reversed()
                    .thenComparing(ForumPostResponse::createdAt, Comparator.reverseOrder()))
                .toList();
        }
        return rows;
    }

    @Transactional
    public ForumPostResponse createPost(String currentUserEmail, String title, String content) {
        User me = userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));

        String t = title == null ? "" : title.trim();
        String c = content == null ? "" : content.trim();
        if (t.isBlank() || c.isBlank()) throw new IllegalArgumentException("Title/content required");

        ForumPost p = new ForumPost();
        p.setAuthorUserId(me.getId());
        p.setTitle(t);
        p.setContent(c);
        var saved = postRepository.save(p);

        return new ForumPostResponse(
            saved.getId(),
            saved.getCreatedAt(),
            toSummary(me),
            saved.getTitle(),
            saved.getContent(),
            0,
            false,
            0
        );
    }

    @Transactional
    public LikeToggleResponse toggleLike(String currentUserEmail, Long postId) {
        User me = userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        ForumPost post = postRepository.findById(postId)
            .orElseThrow(() -> new IllegalArgumentException("Post not found"));

        var existing = likeRepository.findByPostIdAndUserId(post.getId(), me.getId());
        boolean liked;
        if (existing.isPresent()) {
            likeRepository.delete(existing.get());
            liked = false;
        } else {
            ForumLike like = new ForumLike();
            like.setPost(post);
            like.setUserId(me.getId());
            likeRepository.save(like);
            liked = true;
        }
        long count = likeRepository.countByPostId(post.getId());
        return new LikeToggleResponse(liked, count);
    }

    @Transactional(readOnly = true)
    public List<ForumCommentResponse> listComments(String currentUserEmail, Long postId, int limit) {
        userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        postRepository.findById(postId)
            .orElseThrow(() -> new IllegalArgumentException("Post not found"));

        int size = Math.max(1, Math.min(limit, 100));
        var comments = commentRepository.listByPost(postId, PageRequest.of(0, size));

        var authorIds = comments.stream().map(ForumComment::getAuthorUserId).distinct().toList();
        Map<Long, User> authors = userRepository.findAllById(authorIds).stream()
            .collect(Collectors.toMap(User::getId, Function.identity()));

        return comments.stream().map(c -> {
            User author = authors.get(c.getAuthorUserId());
            return new ForumCommentResponse(
                c.getId(),
                postId,
                c.getCreatedAt(),
                author == null ? null : toSummary(author),
                c.getContent()
            );
        }).toList();
    }

    @Transactional
    public ForumCommentResponse addComment(String currentUserEmail, Long postId, String content) {
        User me = userRepository.findByEmailIgnoreCase(currentUserEmail)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        ForumPost post = postRepository.findById(postId)
            .orElseThrow(() -> new IllegalArgumentException("Post not found"));

        String c = content == null ? "" : content.trim();
        if (c.isBlank()) throw new IllegalArgumentException("Content required");

        ForumComment comment = new ForumComment();
        comment.setPost(post);
        comment.setAuthorUserId(me.getId());
        comment.setContent(c);
        var saved = commentRepository.save(comment);

        return new ForumCommentResponse(saved.getId(), postId, saved.getCreatedAt(), toSummary(me), saved.getContent());
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
}

