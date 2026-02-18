package com.SpringBoot.main.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBoot.main.entities.Student;
import com.SpringBoot.main.repository.StudentRepository;
import com.SpringBoot.main.services.StudentService;
@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository sr;
	
	@Override
	public Student signup(Student s) {
		return sr.save(s);
	}

	@Override
	public Student login(String email,String password) {
		Student std = sr.findByEmail(email);

	    if (std != null && std.getPassword().equals(password)) {
	        return std;
	    }

	    return null;	}

}
