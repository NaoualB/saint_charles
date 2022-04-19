import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';
import { HomeInfirmiereComponent } from './home-infirmiere/home-infirmiere.component';

@NgModule({
  declarations: [
    AppComponent,
    ListePatientsComponent,
    AjouterPatientComponent,
    ModifierPatientComponent,
    HomeInfirmiereComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
