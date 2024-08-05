import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../Pet';

@Injectable({
  providedIn: 'root'
})

export class PetsService {
  
  private apiUrl = 'http://localhost:8080';
  

  constructor(private http: HttpClient) { }

  private createHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (token) {
      headers = headers.append('Authorization', 'Bearer ' + token);
    }
    
    return headers;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiUrl}/pets`, { headers: this.createHeaders() });
  }
  
    addPet(pet: Pet): Observable<Pet> {
      const url = `${this.apiUrl}/add`;
      return this.http.post<Pet>(url, pet, { headers: this.createHeaders() });
    }

    getPetById(id: number): Observable<Pet> {
      const url = `${this.apiUrl}/getPet/${id}`;
      return this.http.get<Pet>(url, { headers: this.createHeaders() });
    }

    updatePet(pet: Pet): Observable<Pet> {
      const url = `${this.apiUrl}/updatePet`;
      return this.http.put<Pet>(url, pet, { headers: this.createHeaders() });
    }

    deletePet(id: number | undefined): Observable<Pet> {
      const url = `${this.apiUrl}/deletePet/${id}`;
      return this.http.delete<Pet>(url, { headers: this.createHeaders() });
    }
}
