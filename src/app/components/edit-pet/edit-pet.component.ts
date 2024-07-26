import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PetsService } from '../../services/pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../Pet';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrl: './edit-pet.component.css'
})
export class EditPetComponent {

  pets: Pet[] = [];
  
  pet: Pet = {
    id: undefined,
    name: '',
    idCode: null,
    type: '',
    furColor: '',
    country: ''
  };

  applyForm = new FormGroup({
    name: new FormControl(),
    idCode: new FormControl(null, [Validators.minLength(12), Validators.maxLength(12)]),
    type: new FormControl(),
    furColor: new FormControl(),
    country: new FormControl()
  });

  constructor(private petsService: PetsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.petsService.getPetById(Number(id)).subscribe((pet) => this.pet = pet);
  }

  onDeletePet(id: number|undefined) {
    this.petsService.deletePet(id).subscribe()
    this.router.navigate(['/'])
  }

  onSubmit(): void {
    
    const updatedPet: Pet = {
      // id: Number(this.route.snapshot.paramMap.get('id')),
      id: this.pet.id,
      name: this.applyForm.value.name ?? this.pet.name,
      idCode: this.applyForm.value.idCode ?? this.pet.idCode,
      type: this.applyForm.value.type ?? this.pet.type,
      furColor: this.applyForm.value.furColor ?? this.pet.furColor,
      country: this.applyForm.value.country ?? this.pet.country
    };

    if (this.applyForm.invalid) {
      alert('Please provide 12 digit code');
      return;
    }

    if(!updatedPet.name || !updatedPet.idCode || !updatedPet.type || !updatedPet.furColor || !updatedPet.country){
      alert('please fill all fields');
      return;
    }

    this.petsService.addPet(updatedPet).subscribe((pet)=> {
      this.pets.push(pet);
      this.router.navigate(['/']);
  })
}
}
