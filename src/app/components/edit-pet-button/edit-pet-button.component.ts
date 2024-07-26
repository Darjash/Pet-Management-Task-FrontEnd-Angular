import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from '../../Pet';

@Component({
  selector: 'app-edit-pet-button',
  templateUrl: './edit-pet-button.component.html',
  styleUrl: './edit-pet-button.component.css'
})
export class EditPetButtonComponent {
  @Input() pet!: Pet;
  @Output() editPet = new EventEmitter<number>();
}
