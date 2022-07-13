import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// reactive form for the login page 
export class LoginComponent implements OnInit {
  fetchteacherRecord= new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
     })

  constructor(private route:Router,private student:StudentService) { }

  ngOnInit(): void {
  }

// getRecord function for providing the right user to see the list 
  getRecord(){
    let data:any = this.fetchteacherRecord.value
    console.warn(data)
    this.student.loginteacher(data).subscribe((students:any)=>{
      console.warn(students)
      this.student.activeuser=true
    this.route.navigateByUrl('teacher')
    })
  
  }

}
