import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListAllStudentsComponent } from './list-all-students/list-all-students.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from '../login.guard';



const routes: Routes = [
  {path: 'teacher',  children:[
      { path: '', component: ListAllStudentsComponent, canActivate:[LoginGuard]},
      { path: 'add', component: AddComponent},
      { path: 'update/:rollNo', component: UpdateComponent}, 
      {path:'login', component:LoginComponent}
    ]},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
