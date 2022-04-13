import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListePatientsComponent } from './patient/liste-patients/liste-patients.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    AjouterPatientComponent,
    ModifierPatientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
