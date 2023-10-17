import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  findUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/users/${id}`).pipe(
      catchError((error: any) => {
        if (error.status === 404) {
          return throwError('User not found');
        }
        return throwError('Internal Server Error');
      })
    );
  }

  findAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/users`).pipe(
      catchError(() => {
        return throwError('Internal Server Error');
      })
    );
  }

  findUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/users?email=${email}`).pipe(
      catchError(() => {
        return throwError('Internal Server Error');
      })
    );
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/users`, userData).pipe(
      catchError((error: any) => {
        if (error.status === 409) {
          return throwError('Email already exists');
        }
        return throwError('Internal Server Error');
      })
    );
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/users/${id}`, userData).pipe(
      catchError((error: any) => {
        if (error.status === 404) {
          return throwError('User not found');
        }
        return throwError('Internal Server Error');
      })
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/users/${id}`).pipe(
      catchError((error: any) => {
        if (error.status === 404) {
          return throwError('User not found');
        }
        return throwError('Internal Server Error');
      })
    );
  }
}
