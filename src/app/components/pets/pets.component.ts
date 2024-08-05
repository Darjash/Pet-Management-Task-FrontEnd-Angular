import { Component } from '@angular/core';
import { Pet } from '../../Pet';
import { PetsService } from '../../services/pets.service';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {

  pets : Pet[] = [];
  sortOrder: number = 0;
  unsortedPets : Pet[] = [];
  pet: Pet = {
    name: '',
    idCode: null,
    type: '',
    furColor: '',
    country: ''
  };

  constructor(
    private petsService: PetsService, 
    private router: Router, 
    private authService: AuthService) {}

  ngOnInit(): void{
    this.petsService.getPets().subscribe((pets) => {
      this.pets = pets;
      this.unsortedPets = [...pets];
  }); 
  } 

  onEditPet(id: number): void {
    this.router.navigate(['/editPet', id]);
  }

  sortByName(): void {
    if (this.sortOrder === 0) {
      this.pets.sort((a, b) => a.name.localeCompare(b.name)); 
      this.sortOrder = 1;
    } else if (this.sortOrder === 1) {
      this.pets.sort((a, b) => b.name.localeCompare(a.name)); 
      this.sortOrder = 2;
    } else {
        this.pets = [...this.unsortedPets]; 
        this.sortOrder = 0;
    }
      
    }

    hasPets(): boolean {
     return this.pets !== null
    }

  isAuthorised(): boolean{
    const token = localStorage.getItem('token');
    return token!== null ? true : false;
  }

  logout() {
    this.authService.logout()
    }

}

