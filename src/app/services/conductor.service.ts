import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductorService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getConductors(): Observable<any> {
    return this.http.get(this.baseUrl + 'conductors');
  }

  getConductorById(id: number): Observable<any> {
    console.log(id);
    return this.http.get(`${this.baseUrl}conductors/${id}`);
  }

  // getConductorById(id: number): Observable<any> {
  //   console.log(id);
  //   return this.http.get(`${this.baseUrl}/conductors/${id}`).pipe(
  //     catchError((error: any) => {
  //       throw error;
  //     })
  //   );
  // }

  createConductor(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'conductors', data);
  }

  updateConductor(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}conductors/${id}`, data);
  }

  deleteConductor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}conductors/${id}`);
  }
}
