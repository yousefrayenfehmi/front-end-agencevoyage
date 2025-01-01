import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-vols-recherche',
  standalone: true,
  imports: [MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule],
  templateUrl: './vols-recherche.component.html',
  styleUrl: './vols-recherche.component.scss'
})
export class VolsRechercheComponent {
  @Input() activeTab: string = 'flights';

  destination: string = '';
  checkIn: string = '';
  checkOut: string = '';
  rooms: number = 1;
  adults: number = 2;
  showBestOffers: boolean = false;

  search() {
    console.log('Recherche effectuée', {
      activeTab: this.activeTab,
      destination: this.destination,
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      rooms: this.rooms,
      adults: this.adults,
      showBestOffers: this.showBestOffers
    });
  }
}
