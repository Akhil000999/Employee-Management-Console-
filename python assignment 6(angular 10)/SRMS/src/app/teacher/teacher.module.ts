import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { TeacherRoutingModule } from './teacher-routing.module';
import { ListAllStudentsComponent } from './list-all-students/list-all-students.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListAllStudentsComponent,
    AddComponent,
    UpdateComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
