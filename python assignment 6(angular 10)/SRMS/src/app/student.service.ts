import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  url="http://localhost:8085/student";
  url1="http://localhost:8085/teacher"
  activeuser=false 
  listAllStudents(){
    return this.http.get(`${this.url}/list`)
  }


//created a service for addstudent!
  addstudent(data:object){
    return this.http.post(`${this.url}/insert`,data)
  }

//created a service for upadting student!
  updatestudent(data:object){
    return this.http.post(`${this.url}/update`,data)
  }

// creating a service for fetch by rollNo of student
  fetchbyrollno(data:number){
    return this.http.get(`${this.url}/list/${data}`)
  }

// created a service for the deletion of data 
  deletebyrollno(data:number){
    return this.http.get(`${this.url}/delete/${data}`)
  }

// created a service for finding the student
  findstudent(data:object){
    return this.http.post(`${this.url}/find`,data)
  }
// function calls the api for the login!
  loginteacher(data:object){
    return this.http.post(`${this.url1}/login`,data)
  }
  
 alert =false
  





}
