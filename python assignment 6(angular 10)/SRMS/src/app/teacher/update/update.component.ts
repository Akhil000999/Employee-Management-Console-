import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    alert =false // creating a properti for boolean.
   // creating a reactive form.
    updateRecord = new FormGroup({
    rollNo : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    dob : new FormControl('',Validators.required),
    score : new FormControl('',Validators.required) })

  constructor(private route: Router,private student:StudentService , private activeroute :ActivatedRoute) { }
  

  ngOnInit(): void {
    let roll=this.activeroute.snapshot.params['rollNo']

    this.student.fetchbyrollno(roll).subscribe((students:any)=>{
      this.updateRecord = new FormGroup({
        rollNo : new FormControl(students['rollNo']),
        name : new FormControl(students['name']),
        dob: new FormControl(students['dob']),
        score : new FormControl(students['score'])
      })
    })
  }

  
// fetch record method is used for fetching the results from the database usi api calls 
  fetchRecord(){
    let data = this.updateRecord.value
    
    this.student.updatestudent(data).subscribe((students)=>{
      console.warn(students)
    this.updateRecord.reset()
    this.student.alert=true
    this.route.navigateByUrl('teacher')
    
    }
    )
    
  }

}
