package com.SpringBoot.main.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBoot.main.entities.Cources;
import com.SpringBoot.main.entities.Enrollment;
import com.SpringBoot.main.repository.CourseRepository;
import com.SpringBoot.main.repository.EnrollmentRepository;
import com.SpringBoot.main.services.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepo;

    @Autowired
    private EnrollmentRepository enrollmentRepo;

    // ✅ This is for MyCourses
    @Override
    public List<Cources> getcource(int studentId) {

        // 1️⃣ Get enrollments of that student
        List<Enrollment> enrollments =
                enrollmentRepo.findByStudentId(studentId);

        // 2️⃣ Store course ids
        List<Integer> courseIds = new ArrayList<>();

        for (Enrollment e : enrollments) {
            courseIds.add(e.getCourceId());
        }

        // 3️⃣ If no enrollments, return empty list
        if (courseIds.isEmpty()) {
            return new ArrayList<>();
        }

        // 4️⃣ Return only those courses
        return courseRepo.findAllById(courseIds);
    }

    // ✅ This is for All Courses page
    @Override
    public List<Cources> getAllCourses() {
        return courseRepo.findAll();
    }
}
