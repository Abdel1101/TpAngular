import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  info={
    nom:"karimi", 
    prenom:"saad",
    mail:"s.karimi@gmail.com"
  };
  constructor() { }

  getEtudiantInfo(){
    return this.info;
  }
}
