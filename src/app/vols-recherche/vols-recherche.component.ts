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
  vols: any[] = []; // This will store the flight data (not the search criteria)
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
      this.volSearchCriteria.arrivee !== null &&
      new Date(this.volSearchCriteria.dateDepart) > new Date()
    );
  }

  search() {
    console.log(this.volSearchCriteria);
    if (!this.validateInputs()) {
      console.log('Veuillez Vérifier tous les champs');
      return;
    }
    
    const allerVol = this.recupererVol();

    if (this.volSearchCriteria.type === 'aller-simple') {
      if (allerVol && allerVol.length > 0) {
        this.router.navigate(['/check'], {
          state: { allerVol: allerVol }
        });
      } else {
        console.log('Aucun vol aller trouvé');
      }
    }
  }

  recupererVol() {
    const givenDate = new Date(this.volSearchCriteria.dateDepart ?? ''); // Default to empty string if undefined or null

    // Ensure that depart and arrivee are valid objects with _id
    const foundVol = this.vols.filter(v => 
      new Date(v.dateDepart) > givenDate &&
      v.villeDepart?._id === this.volSearchCriteria.depart?._id &&
      v.villeArrivee?._id === this.volSearchCriteria.arrivee?._id
    );

    return foundVol.length > 0 ? foundVol : null;
  }
}
