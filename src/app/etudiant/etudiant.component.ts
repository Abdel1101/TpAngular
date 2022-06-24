import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
  providers: [EtudiantService]
})
export class EtudiantComponent implements OnInit {

  constructor(private etudiantService: EtudiantService) { }
  info= this.etudiantService.getEtudiantInfo();

  ngOnInit(): void {
  }

}
