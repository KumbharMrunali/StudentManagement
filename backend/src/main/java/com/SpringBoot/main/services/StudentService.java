package com.SpringBoot.main.services;

import com.SpringBoot.main.entities.Student;

public interface StudentService {

	Student signup(Student s);
	Student login(String email,String password);
}
