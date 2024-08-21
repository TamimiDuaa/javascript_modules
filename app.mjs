
import * as school from "./modules/school.mjs";

const courses_table =document.querySelector(".coursesTable");
const students_table =document.querySelector(".studentTable");
const teacher_table =document.querySelector(".TeacherTable");

const coursesSelectone = document.querySelector(".courses1");

const coursesSelecttwo = document.querySelector(".courses2");
document.getElementById("add_course").addEventListener("click",(event)=>{
 event.preventDefault();


    school.addNewCourse(document.getElementById("course_name").value ,document.getElementById("course_capacity").value);
   
         
    let tr = document.createElement("tr");
    let first_td =  document.createElement("td");
    let second_td =  document.createElement("td");

   let option1 = document.createElement("option");
   option1.value =  document.getElementById("course_name").value;
   option1.innerHTML = document.getElementById("course_name").value;

   let option2 = document.createElement("option");
   option2.value =  document.getElementById("course_name").value;
   option2.innerHTML = document.getElementById("course_name").value;
   coursesSelectone.appendChild(option1);
   coursesSelecttwo.appendChild(option2);
    

    school.courses.forEach((each)=>{
        first_td.textContent = each.name;
        second_td.textContent = each.capacity;

    }

    )
    tr.appendChild(first_td);
    tr.appendChild(second_td);
    courses_table.appendChild(tr);
   
})

document.getElementById("add_student").addEventListener("click",(event)=>{
    event.preventDefault();
        let course;
        school.courses.forEach((each) =>{
            if(each.name === coursesSelectone.value )
                course = each;
        })
        console.log(course.name);
       school.addNewStudent(document.getElementById("student_name").value ,document.getElementById("student_age").value,course.name);
      
            
       let tr = document.createElement("tr");
       let first_td =  document.createElement("td");
       let second_td =  document.createElement("td");

       let third_td = document.createElement("td");
        
   
       school.students.forEach((each)=>{
           first_td.textContent = each.name;
           second_td.textContent = each.age;
            third_td.textContent = each.course.name;
            console.log(each.name+" "+ each.course.name);
       });
       tr.appendChild(first_td);
       tr.appendChild(second_td);
       students_table.appendChild(tr);
      
   })



document.getElementById("add_teacher").addEventListener("click",(event)=>{
    
    event.preventDefault();
    console.log("hello")
        let course;

        school.courses.forEach((each) =>{
            if(each.name === coursesSelecttwo.value )
                course = each;
        })
        console.log(course.name);
       school.addNewTeacher(document.getElementById("teacher_name").value ,course.name);
      
            
       let tr = document.createElement("tr");
       let first_td =  document.createElement("td");
       let second_td =  document.createElement("td");

        
   
       school.teachers.forEach((each)=>{
           first_td.textContent = each.name;
           second_td.textContent = each.course.name;
            console.log(each.name+" "+ each.course.name);
       });
       tr.appendChild(first_td);
       tr.appendChild(second_td);
       teacher_table.appendChild(tr);
      
   })