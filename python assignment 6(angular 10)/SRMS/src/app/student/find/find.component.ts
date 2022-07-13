import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  // creating the reactive form
  findstudentResult = new FormGroup({
    rollNo : new FormControl('',Validators.required),
    dob : new FormControl('',Validators.required),
  })
  
  constructor(private route: Router,private student:StudentService) { }

  ngOnInit(): void {
  }

  // getresults function for getting the correct student according to the date of birth and roll number!
  getresult(){
    let data = this.findstudentResult.value
    if(this.findstudentResult.valid){
    this.student.findstudent(data).subscribe((students:any)=>{
    if(students==null){
       alert("in valid or result doesn't exist!")
    }
    else{
      console.warn(students)
    this.student.alert=true
    this.route.navigateByUrl(`student/view/${students['rollNo']}`)
    }
    
    }
    )
  }else{
    alert("invalid values")
  }
   
  }




}
