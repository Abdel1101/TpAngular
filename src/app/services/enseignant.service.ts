import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  info={ nom:"Abdelhamid", 
  prenom:"Soubai", 
  mail:"asoubai999@gmail.com"};


  constructor() { }
  getEnseignantInfo(){
    return this.info;
  }
}
