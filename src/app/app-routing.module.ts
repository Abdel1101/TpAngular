import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'enseignant', component:EnseignantComponent},
  {path:'etudiant', component:EtudiantComponent},
  {path:'', redirectTo:'/home', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
