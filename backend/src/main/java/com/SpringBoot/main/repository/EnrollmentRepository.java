package com.SpringBoot.main.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.SpringBoot.main.entities.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment,Integer> {

    List<Enrollment> findByStudentId(int studentId);

}
