package com.SpringBoot.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.SpringBoot.main.entities.Cources;
import com.SpringBoot.main.repository.CourseRepository;
import com.SpringBoot.main.services.CourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "*")
public class CourseController {

	
	    @Autowired
	    private CourseService cs;

	    @Autowired
	    private CourseRepository cr;

	    @GetMapping("/all")
	    public List<Cources> getAllCourses() {
	        return cr.findAll();
	    }

	    @GetMapping("/student/{id}")
	    public List<Cources> getCourse(@PathVariable int id) {
	        return cs.getcource(id);
	    }

	    @PostMapping("/add")
	    public Cources addCourse(@RequestBody Cources c) {
	        return cr.save(c);
	    }
	}

