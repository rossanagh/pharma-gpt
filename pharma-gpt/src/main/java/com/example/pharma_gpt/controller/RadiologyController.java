package com.example.pharma_gpt.controller;

import com.example.pharma_gpt.dto.RadiologyAnalyzeResponse;
import com.example.pharma_gpt.service.RadiologyService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/radiology")
public class RadiologyController {

    private final RadiologyService radiologyService;

    public RadiologyController(RadiologyService radiologyService) {
        this.radiologyService = radiologyService;
    }

    @PostMapping(value = "/analyze", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<RadiologyAnalyzeResponse> analyze(@RequestPart("image") MultipartFile image) throws Exception {
        String md = radiologyService.analyze(image);
        return ResponseEntity.ok(new RadiologyAnalyzeResponse(md));
    }
}

