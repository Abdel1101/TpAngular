import { Component } from '@angular/core';
import { Personne } from './classes/personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPANGULAR';

  AfficheColor: boolean=false;

  public changeColor() :void{
    this.AfficheColor=!this.AfficheColor;
  }

  public valeur1: number = 10;
  personne: Personne= new Personne(10,'Abdel', 'Sbai');
  tab: number[] = [14, 10, 15, 20];
  tab2: number[] = [5,9,15,6];
  tab3: number[] = [1,2,3,4];
  moyennes: number[] = [10, 9, 8, 10, 12, 16, 20, 15]
  direBonjour() : string {
    return 'Bonjour mes étudiants'
  }

  public AfficherAlert() : void{
    console.log('Vous avez cliqué sur le button!!');
    alert('Déclanchement de l évenement!!')
  }

  //pipes 
  public dateAujourd : Date = new Date();
  public nombre : number = 0;
  public message : string = "";

  constructor(private router:Router){

  }

  onEtudiant(){
    this.router.navigate(['etudiant']);
  }
  onEnseignant(){
    this.router.navigate(['enseignat']);
  }

  ngOnInit(): void{
    this.dateAujourd = new Date();
    this.nombre = 100;
    this.message = "Bonjour mes étudiants"
  }
}
