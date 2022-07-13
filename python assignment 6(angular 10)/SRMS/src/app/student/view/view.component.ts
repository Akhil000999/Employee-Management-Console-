import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route: Router,private student:StudentService,private activeroute:ActivatedRoute) { }
  current:any={}
  
  ngOnInit(): void {
    let roll=this.activeroute.snapshot.params['rollNo']

    this.student.fetchbyrollno(roll).subscribe((students:any)=>{
      this.current = students
    })

  }

// alert property
  alert=this.student.alert

// close function for chaing the bool values of alert property
  close(){
    this.alert=false
    this.student.alert=false
  }

}
