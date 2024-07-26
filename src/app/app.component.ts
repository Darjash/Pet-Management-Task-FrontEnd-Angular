import { Component } from '@angular/core';
import { PetsService } from './services/pets.service';
import { Pet } from './Pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pet-Management-App';


}
