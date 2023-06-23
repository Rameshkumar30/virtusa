import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Lessons } from '../lessons';
import { LessonsService } from '../lessons.service';

@Component({
  selector: 'app-addlessons',
  templateUrl: './addlessons.component.html',
  styleUrls: ['./addlessons.component.css']
})
export class AddlessonsComponent implements OnInit{
  @Input() courseid!: number;
  public lessons:Lessons[]=[];
  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.getLessonsByCourseId();
   }

  private getLessonsByCourseId() {
    this.lessonsService.getLessonsByCourseId(this.courseid).subscribe(
      (response: Lessons[]) => {
        this.lessons = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
