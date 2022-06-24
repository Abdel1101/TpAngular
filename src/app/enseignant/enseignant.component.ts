import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';
@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css'],
  providers: [EnseignantService]
})
export class EnseignantComponent implements OnInit {

  constructor(private enseignantService: EnseignantService) {}

  info= this.enseignantService.getEnseignantInfo();

  ngOnInit(): void {
  }

}
