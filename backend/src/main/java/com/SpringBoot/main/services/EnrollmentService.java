package com.SpringBoot.main.services;

import com.SpringBoot.main.entities.Enrollment;

public interface EnrollmentService {
	Enrollment enrollc(Enrollment e);
    Enrollment displaycource(int student_id);
}
