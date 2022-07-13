import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-students',
  templateUrl: './list-all-students.component.html',
  styleUrls: ['./list-all-students.component.css']
})
export class ListAllStudentsComponent implements OnInit {

  constructor(private studentService:StudentService, private route:Router) { }
  students:any=[] // creating a list take the object and to iterate over the students table in database
  ngOnInit(): void {
    
    this.studentService.listAllStudents().subscribe((students)=>{
      console.warn(students);
      this.students=students
    })

  }
  
// creating a property for using alert function!
  alert=this.studentService.alert
  // deleting function for deleting the student data from the data base using rollNo as passed parameter.
  delete(roll:number){
    this.studentService.deletebyrollno(roll).subscribe((students)=>{
      console.warn(students)
      this.alert=true
      this.studentService.alert=true
    this.ngOnInit()
    }
    )
  }

// close function for performing the action of "cross" mark
  close(){
    this.studentService.alert= false
    this.alert=false
  }


}
