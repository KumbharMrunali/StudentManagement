package com.SpringBoot.main.services;

import java.util.List;

import com.SpringBoot.main.entities.Cources;

public interface CourseService {

 List<Cources> getAllCourses();

 List<Cources> getcource(int studentId);


}
