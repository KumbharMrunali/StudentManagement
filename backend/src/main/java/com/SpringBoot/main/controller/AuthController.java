package com.SpringBoot.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.SpringBoot.main.entities.Student;
import com.SpringBoot.main.services.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private StudentService ss;

    @PostMapping("/signup")
    public Student signup(@RequestBody Student s) {
        return ss.signup(s);
    }

   
    @PostMapping("/login")
    public Student login(@RequestParam String email,
                         @RequestParam String password) {
        return ss.login(email, password);
    }
}
