import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from './student.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private studentService: StudentService){}
  // gaurds usage for the protection.
  canActivate()
  {
     return this.studentService.activeuser
  }
}
