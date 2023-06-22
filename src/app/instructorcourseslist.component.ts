import { Component, OnInit } from '@angular/core';
import { Courses } from './courses';
import { CoursesService } from '../courses.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instructorcourseslist',
  templateUrl: './instructorcourseslist.component.html',
  styleUrls: ['./instructorcourseslist.component.css']
})
export class InstructorcourseslistComponent implements OnInit{
  public courses: Courses[] = [];
  public editCourses!: Courses;
  public deleteCourses!: Courses;
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


  public onAddCourses(addForm: NgForm):void{
    this.coursesService.addCourses(addForm.value).subscribe(
      (response: Courses) =>{
        console.log(response);
        this.getCourses();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCourses(courses: Courses):void{
    this.coursesService.updateCourses(courses).subscribe(
      (response: Courses) =>{
        console.log(response);
        this.getCourses();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onDeleteCourses(courseid: number):void{
    this.coursesService.deleteCourses(courseid).subscribe(
      (response: void) =>{
        console.log(response);
        this.getCourses();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  openAddModal(courses:null,mode:string):void{
    const button=document.getElementById('onAddCourses');
    if(button!=null){
      button.style.display='block';
    }
  }
  openEditModal(courses:Courses,mode:string):void{
    this.editCourses=courses;
    const button=document.getElementById('onEditCourses');
    if(button!=null){
      button.style.display='block';
    }
  }
  openDeleteModal(courses:Courses,mode:string):void{
    this.deleteCourses=courses;
    const button=document.getElementById('onDeleteCourses');
    if(button!=null){
      button.style.display='block';
    }
  }
  closeAddModal(){
    const button=document.getElementById('onAddCourses');
    if(button!=null){
      button.style.display='none';
    }
  }
  closeEditModal(){
    const button=document.getElementById('onEditCourses');
    if(button!=null){
      button.style.display='none';
    }
  }
  closeDeleteModal(){
    const button=document.getElementById('onDeleteCourses');
    if(button!=null){
      button.style.display='none';
    }
  }
}
