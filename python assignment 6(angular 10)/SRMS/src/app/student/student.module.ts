import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { StudentRoutingModule } from './student-routing.module';
import { FindComponent } from './find/find.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    FindComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
