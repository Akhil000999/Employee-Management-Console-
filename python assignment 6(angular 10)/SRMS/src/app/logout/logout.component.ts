import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private student:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.student.activeuser=false
    this.router.navigateByUrl('')
  }

}
