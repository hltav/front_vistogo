import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConductorService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getConductors(): Observable<any> {
    return this.http.get(this.baseUrl + 'conductors');
  }

  createConductor(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'conductors', data);
  }
}
