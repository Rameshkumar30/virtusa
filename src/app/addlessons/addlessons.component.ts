import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Lessons } from '../lessons';

import { NgForm } from '@angular/forms';
import { Courses } from '../courses';
import { CoursesService } from '../courses.service';
import { LessonsService } from '../lessons.service';
@Component({
  selector: 'app-addlessons',
  templateUrl: './addlessons.component.html',
  styleUrls: ['./addlessons.component.css']
})
export class AddlessonsComponent implements OnInit{
 public courses:Courses[]=[];
 constructor(private coursesService: CoursesService){}
 ngOnInit() {
   this.getCourses();
  }

 public getCourses():void{
   this.coursesService.getCourses().subscribe(
     (response: Courses[]) =>{
       this.courses=response;
     },
     (error: HttpErrorResponse)=>{
       alert(error.message);
     }
   );
  }

  public lessons:Lessons[]=[];
 
}
