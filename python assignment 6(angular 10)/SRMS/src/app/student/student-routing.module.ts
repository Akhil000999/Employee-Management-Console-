import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from './view/view.component';
import {FindComponent} from './find/find.component';



const routes: Routes = [
  {path: 'student', children:[
    { path: '', component: FindComponent  },
    { path: 'view/:rollNo', component: ViewComponent }
  ]}
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
