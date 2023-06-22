import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from './courses';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<Courses[]>{
    return this.http.get<Courses[]>('http://localhost:8080/courses/allcourses');
  }

  public addCourses(courses: Courses): Observable<Courses>{
    return this.http.post<Courses>('http://localhost:8080/courses/addcourses',courses);
  }

  public updateCourses(courses: Courses): Observable<Courses>{
    return this.http.put<Courses>('http://localhost:8080/courses/updatecourses',courses);
  }

 public deleteCourses(courseid: number): Observable<any> {
    const url = `http://localhost:8080/courses/deletecourses/${courseid}`;
    return this.http.delete<any>(url);
  }


}




