package com.SpringBoot.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBoot.main.entities.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{

	Student findByEmail(String email);

}
