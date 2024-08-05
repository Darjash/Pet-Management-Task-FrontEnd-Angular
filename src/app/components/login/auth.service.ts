import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

login(username: string, password: string): Observable<string> {
  const body = { username, password };
  return this.http.post<string>(`${this.apiUrl}/login`, body, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'json' 
  }).pipe(
    tap(token => {
      localStorage.setItem('token', token);
    })
  );
}

isLoggedIn(): boolean {
  const token = localStorage.getItem('token');
  return !!token; 
}

// getUserDetails(): Observable<any> {
//   const token = localStorage.getItem('token'); 
//   const headers = new HttpHeaders({
//     'Authorization': 'Bearer ' + token 
//   });
//   return this.http.get(`${this.apiUrl}/user`, { headers });
// }

logout(): void {
  localStorage.removeItem('token'); 
}
}