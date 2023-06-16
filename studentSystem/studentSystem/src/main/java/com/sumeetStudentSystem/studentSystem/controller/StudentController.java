package com.sumeetStudentSystem.studentSystem.controller;

import com.sumeetStudentSystem.studentSystem.Service.StudentService;
import com.sumeetStudentSystem.studentSystem.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student saved";
    }
    @GetMapping("/getAllStudents")
    public List<Student> getAllStudent(){
        return studentService.getAllStudent();
    }
}
