import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicledataService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<any> {
    console.log(this.getVehicles)
    return this.http.get(this.baseUrl + 'vehicles');
  }

  createVehicles(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'vehicles', data);
  }
  updateVehicle(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}vehicles/${id}`, data);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}vehicles/${id}`);
  }
}
