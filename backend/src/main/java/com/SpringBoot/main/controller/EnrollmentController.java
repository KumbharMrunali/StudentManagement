package com.SpringBoot.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.SpringBoot.main.entities.Enrollment;
import com.SpringBoot.main.services.EnrollmentService;

@RestController
@RequestMapping("/enrollment")
@CrossOrigin(origins = "http://localhost:5173")
public class EnrollmentController {

    @Autowired
    private EnrollmentService es;

    @PostMapping("/add")
    public Enrollment enroll(@RequestBody Enrollment e) {
        return es.enrollc(e);
    }

}
