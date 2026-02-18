package com.SpringBoot.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBoot.main.entities.Cources;

public interface CourseRepository extends JpaRepository<Cources,Integer> {

}
