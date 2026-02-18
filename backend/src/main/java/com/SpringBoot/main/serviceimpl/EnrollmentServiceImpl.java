package com.SpringBoot.main.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBoot.main.entities.Enrollment;
import com.SpringBoot.main.repository.EnrollmentRepository;
import com.SpringBoot.main.services.EnrollmentService;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    @Autowired
    private EnrollmentRepository er;

    @Override
    public Enrollment enrollc(Enrollment e) {
        return er.save(e);  
    }

    @Override
    public Enrollment displaycource(int id) {
        return er.findById(id).orElse(null);  
    }
}
