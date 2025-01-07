import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-vols-recherche',
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    NgIf,
    MatRadioModule
  ],
  templateUrl: './vols-recherche.component.html',
  styleUrl: './vols-recherche.component.scss'
})
export class VolsRechercheComponent {
  @Input() activeTab: string = 'flights';
  vol: any[] = [];
  airports:any[]=[]
  constructor(private Service: ServiceService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAirpots();
    
  }

  // Get all airlines
  getAirpots() {
    this.Service.getAllAirports().subscribe((response) => {
      this.airports = response;
      console.log(this.airports)
    });
  }
  vols = {
    depart: '',
    arrivee: '',
    dateDepart: '',
    dateRetour: '',
    class: '',
    passage: 1,
    type: 'aller-simple' 
  };

  validateInputs(): boolean {
    return this.vols.depart !== '' && this.vols.arrivee !== '' && this.vols.dateDepart !== '';
  }

  search() {
    if (!this.validateInputs()) {
      console.log('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const allerVol = this.recupererVol(this.vols.dateDepart, this.vols.depart, this.vols.arrivee);

    if (this.vols.type === 'aller-simple') {
      if (allerVol && allerVol.length > 0) { 
        this.router.navigate(['/check'], {
          state: { allerVol: allerVol }
        });      } else {
        console.log('Aucun vol aller trouvé');
      }
    } else {
      console.log('Recherche pour un aller-retour');

      if (this.vols.dateRetour === '') {
        console.log('Veuillez indiquer une date de retour');
        return;
      }

      const retourVol = this.recupererVol(this.vols.dateRetour, this.vols.arrivee, this.vols.depart);

      if (allerVol && allerVol.length > 0 && retourVol && retourVol.length > 0) {
        this.router.navigate(['/check'], {
          state: { allerVol: allerVol, retourVol: retourVol }
        });      } else {
        console.log('Aucun vol aller ou retour trouvé');
      }
    }
  }

  recupererVol(dateDepart: string, depart: string, arrivee: string) {
    const foundVol = this.vol.filter(v =>
      v.departureTime.includes(dateDepart) &&
      v.from.includes(depart) &&
      v.to.includes(arrivee)
    );

    return foundVol.length > 0 ? foundVol : null; 
  }
}
