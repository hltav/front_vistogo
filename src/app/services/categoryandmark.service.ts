import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryandmarkService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get(this.baseUrl + 'categories');
  }

  createCategory(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'categories', data);
  }

  getMark(): Observable<any> {
    return this.http.get(this.baseUrl + 'marks');
  }

  createMark(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'marks', data);
  }
}
