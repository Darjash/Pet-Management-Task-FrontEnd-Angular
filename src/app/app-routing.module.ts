import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './components/pets/pets.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/check-auth.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', component: PetsComponent, canActivate: [AuthGuard]},
  {path: 'addPet', component: AddPetComponent, canActivate: [AuthGuard]},
  {path: 'editPet/:id', component: EditPetComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
