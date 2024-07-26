import { Component, EventEmitter, Output } from '@angular/core';
import { Pet } from '../../Pet';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetsService } from '../../services/pets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrl: './add-pet.component.css'
})

export class AddPetComponent {
@Output() onAddPet: EventEmitter<Pet> = new EventEmitter;

pets: Pet[] = [];

applyForm = new FormGroup({
  name: new FormControl(),
  idCode: new FormControl(null, [Validators.pattern(/^\d{12}$/)]),
  type: new FormControl(),
  furColor: new FormControl(),
  country: new FormControl()
})

constructor(private petsService: PetsService, private router: Router) {}

  onSubmit() : void {

    if (this.applyForm.invalid)  {
      alert('Please provide 12 digit code');
      return;
    }
    
    const newPet: Pet = {
      name: this.applyForm.value.name,
      idCode: this.applyForm.value.idCode!,
      type: this.applyForm.value.type,
      furColor: this.applyForm.value.furColor,
      country: this.applyForm.value.country,
    }

    if(!this.applyForm.value.name || !this.applyForm.value.idCode || !this.applyForm.value.type || !this.applyForm.value.furColor || !this.applyForm.value.country){
      alert('Please fill all fields');
      return;
    }

    this.petsService.addPet(newPet).subscribe((pet)=> {
     this.pets.push(pet); 
     this.router.navigate(['/'])
    });
  }
}
