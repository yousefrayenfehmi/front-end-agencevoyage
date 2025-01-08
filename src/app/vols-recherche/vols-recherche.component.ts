import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { Airport } from '../airport';
import { Airline } from '../airline';

@Component({
  selector: 'app-vols-recherche',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    NgIf,
    MatRadioModule,
    NgFor
  ],
  templateUrl: './vols-recherche.component.html',
  styleUrls: ['./vols-recherche.component.scss']
})
export class VolsRechercheComponent {
  @Input() activeTab: string = 'flights';
  vols: any[] = []; // Flight data
  airports: Airport[] = [];
  airlines: Airline[] = [];

  volSearchCriteria = {
    depart: null as Airport | null,
    arrivee: null as Airport | null,
    dateDepart: '',
    class: '',
    passage: 1,
    type: 'aller-simple'
  };

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getAllAirports().subscribe((data: Airport[]) => {
      this.airports = data;
    });

    this.service.getAllAirlines().subscribe((data: Airline[]) => {
      this.airlines = data;
    });

    this.service.getAllVols().subscribe((data: any[]) => {
      this.vols = data;
      console.log(data);
    });
  }

  validateInputs(): boolean {
    return (
      this.volSearchCriteria.depart !== null &&
      this.volSearchCriteria.arrivee !== null 
    );
  }

  search() {
    console.log(this.volSearchCriteria);

    if (!this.validateInputs()) {
      console.log('Veuillez vérifier tous les champs');
      return;
    }

    const allerVol = this.findVols(
      this.volSearchCriteria.dateDepart,
      this.volSearchCriteria.depart,
      this.volSearchCriteria.arrivee
    );

    if (this.volSearchCriteria.type === 'aller-simple') {
      this.handleOneWaySearch(allerVol);
    } else {
      this.handleRoundTripSearch(allerVol);
    }
  }

  handleOneWaySearch(allerVol: any[]) {
    if (allerVol && allerVol.length > 0) {
      this.router.navigate(['/check'], {
        state: { userInfo: this.volSearchCriteria,voles:allerVol }
      });
    } else {
      console.log('Aucun vol aller trouvé');
    }
  }

  handleRoundTripSearch(allerVol: any[]) {
    console.log('Recherche pour un aller-retour');

    if (!this.volSearchCriteria.dateDepart) {
      console.log('Veuillez indiquer une date de retour');
      return;
    }

    const retourVol = this.findVols(
      this.volSearchCriteria.dateDepart, // Replace with the actual return date
      this.volSearchCriteria.arrivee,
      this.volSearchCriteria.depart
    );

    if (allerVol && allerVol.length > 0 && retourVol && retourVol.length > 0) {
      this.router.navigate(['/check'], {
        state: { allerVol: allerVol, retourVol: retourVol }
      });
    } else {
      console.log('Aucun vol aller ou retour trouvé');
    }
  }

  findVols(date: string, depart: Airport | null, arrivee: Airport | null) {
    const searchDate = new Date(date ?? '');
    return this.vols.filter(
      (vol) =>
        new Date(vol.dateDepart) > searchDate &&
        vol.villeDepart?._id === depart?._id &&
        vol.villeArrivee?._id === arrivee?._id
    );
  }
}
