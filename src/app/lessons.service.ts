import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lessons } from './lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  public getLessons(): Observable<Lessons[]>{
    return this.http.get<Lessons[]>('http://localhost:8080/alllessons');
  }

  public addLessons(lessons: Lessons): Observable<Lessons>{
    return this.http.post<Lessons>('http://localhost:8080/addlessons',lessons);
  }

  public updateLessons(lessons: Lessons): Observable<Lessons>{
    return this.http.put<Lessons>('http://localhost:8080/updatelessons',lessons);
  }

 public deleteLessons(lessonid: number): Observable<any> {
    const url = `http://localhost:8080/deletelessons/${lessonid}`;
    return this.http.delete<any>(url);
  }

}
