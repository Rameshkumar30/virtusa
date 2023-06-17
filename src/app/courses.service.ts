import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './instructorcourseslist/courses';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<Courses[]>{
    return this.http.get<Courses[]>('http://localhost:8080/courses/all');
  }

  public addCourses(courses: Courses): Observable<Courses>{
    return this.http.post<Courses>('http://localhost:8080/courses/add',courses);
  }

  public updateCourses(courses: Courses): Observable<Courses>{
    return this.http.put<Courses>('http://localhost:8080/courses/update',courses);
  }

 public deleteCourses(_courseid: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/courses/delete/{courseid}');
  }


}




