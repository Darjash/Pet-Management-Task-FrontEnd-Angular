import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './components/pets/pets.component';
import { EditPetButtonComponent } from './components/edit-pet-button/edit-pet-button.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    EditPetButtonComponent,
    AddPetComponent,
    EditPetComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
