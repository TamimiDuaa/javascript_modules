import {Course} from "./course.mjs";
import { Student } from "./student.mjs";
import { Teacher } from "./teacher.mjs";

export const courses=[];
export const students=[];
export const teachers=[];

export function addNewCourse(course_name,course_capacity){
    let course = new Course(course_name,course_capacity);

    courses.push(course);
}

export function addNewStudent(student_name, student_age,course_name){
    console.log("object");
    courses.forEach((each)=>{
        console.log(each.name + " "+course_name);
        if(each.name === course_name){
            students.push(new Student(student_name, student_age, each))
            console.log(student_name);
        }
        
    })
    
}

export function addNewTeacher(teacher_name, course_name){

    courses.forEach((each)=>{
        if(each.name === course_name){
            teachers.push(new Teacher(teacher_name,each));
        }
        
    })
    
}

