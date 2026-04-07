package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.dto.*;
import com.example.pharma_gpt.service.ForumService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/forum")
public class ForumController {

    private final ForumService forum;

    public ForumController(ForumService forum) {
        this.forum = forum;
    }

    @GetMapping("/posts")
    public ResponseEntity<?> listPosts(Authentication authentication,
                                       @RequestParam(value = "limit", required = false, defaultValue = "20") int limit,
                                       @RequestParam(value = "sort", required = false, defaultValue = "recent") String sort) {
        try {
            String email = (String) authentication.getPrincipal();
            List<ForumPostResponse> posts = forum.listPosts(email, limit, sort);
            return ResponseEntity.ok(posts);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/posts")
    public ResponseEntity<?> createPost(Authentication authentication,
                                        @Valid @RequestBody CreateForumPostRequest request) {
        try {
            String email = (String) authentication.getPrincipal();
            ForumPostResponse created = forum.createPost(email, request.title(), request.content());
            return ResponseEntity.ok(created);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/posts/{postId}/like")
    public ResponseEntity<?> toggleLike(Authentication authentication,
                                        @PathVariable("postId") Long postId) {
        try {
            String email = (String) authentication.getPrincipal();
            LikeToggleResponse res = forum.toggleLike(email, postId);
            return ResponseEntity.ok(res);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<?> listComments(Authentication authentication,
                                          @PathVariable("postId") Long postId,
                                          @RequestParam(value = "limit", required = false, defaultValue = "50") int limit) {
        try {
            String email = (String) authentication.getPrincipal();
            return ResponseEntity.ok(forum.listComments(email, postId, limit));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<?> addComment(Authentication authentication,
                                        @PathVariable("postId") Long postId,
                                        @Valid @RequestBody CreateForumCommentRequest request) {
        try {
            String email = (String) authentication.getPrincipal();
            return ResponseEntity.ok(forum.addComment(email, postId, request.content()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}

