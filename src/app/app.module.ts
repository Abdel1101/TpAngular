import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    EnseignantComponent,
    EtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
