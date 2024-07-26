import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../Pet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class PetsService {
  
  private apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getPets() : Observable<Pet[]> {
    const url = `${this.apiUrl}/pets`;
    return this.http.get<Pet[]>(url);
  }
  
  addPet(pet: Pet) : Observable<Pet> {
    console.log(pet.name);
    const url = `${this.apiUrl}/add`;
    return this.http.post<Pet>(url, pet, httpOptions);
  }

  getPetById(id: number) : Observable<Pet> {
    const url = `${this.apiUrl}/getPet/${id}`;
    return this.http.get<Pet>(url);
  }

  updatePet(pet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/updatePet`;
    return this.http.put<Pet>(url, pet, httpOptions);
  }

  deletePet(id: number | undefined) {
    const url = `${this.apiUrl}/deletePet/${id}`;
    return this.http.delete<Pet>(url);
  }
  
}
