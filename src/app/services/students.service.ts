import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private url: string = environment.url;

  constructor(private http: HttpClient, private router: Router) {}

  public getStudents(): Observable<any> {
    return this.http.get<any>(`${this.url}dashboard/Teachers`);
  }

  /**
   * getStudentDetail
   */
  public getStudentDetail(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.url}dashboard/Teachers/viewStudentDetail?id=${id}`
    );
  }

  /**
   * verifyStudentForExam
   */
  public verifyStudentForExam() {
    return this.http.get<any>(`${this.url}dashboard/Teachers/StudentForExam`);
  }
}
