package com.sumeetStudentSystem.studentSystem.Service;

import com.sumeetStudentSystem.studentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudent();
}
