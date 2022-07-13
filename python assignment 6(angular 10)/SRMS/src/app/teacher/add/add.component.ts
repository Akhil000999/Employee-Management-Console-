import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

// Below we have created the reactive form
export class AddComponent implements OnInit 
{                 addRecord = new FormGroup({
                  rollNo : new FormControl('',Validators.required),
                  name : new FormControl('',Validators.required),
                  dob : new FormControl('',Validators.required),
                  score : new FormControl('',Validators.required) })

  constructor(private student:StudentService,private route:Router) { }

  ngOnInit(): void {
  }

// fetchrecord function for using the services for adding the data!
  fetchRecord(){
    let data = this.addRecord.value
    this.student.addstudent(data).subscribe((students)=>{
      console.warn(students)
      this.student.alert=true
    this.addRecord.reset()
    this.route.navigateByUrl('teacher')
    }
    )
  
  }


}
