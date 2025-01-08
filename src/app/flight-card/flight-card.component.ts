import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VolService } from '../vol.service';
import { Router } from '@angular/router';

interface Flight {
  direction: string;
  airline: string;
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  isDirect: string;
  price: number;
}

@Component({
  selector: 'app-flight-card',
  imports: [NgIf, CommonModule],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {
  flights: any[] = [];
  allerVol: any[] = [];
  retourVol: any[] = [];
  @Input() data: any; // Recevoir des données depuis un autre composant
  outboundFlight: Flight[] = []; // Array of flights
  returnFlight: Flight[] = []; // Array of flights

  regularPrice: number = 0;
  discountedPrice: number = 0;
  savings = 40;

  constructor(private service: VolService, private router: Router) {}

  ngOnInit(): void {
    if (history.state && history.state.allerVol) {
      this.allerVol = history.state.allerVol;
      console.log('Aller Vol:', this.allerVol);
      this.allerVol.forEach((flight) => {
        this.outboundFlight.push({
          direction: "Aller",
          airline: flight.compagnieAerienne.name,
          departureTime: new Date(flight.dateDepart).toLocaleString(),
          departureAirport: flight.villeDepart.name,
          arrivalTime: new Date(flight.dateArrivee).toLocaleString(),
          arrivalAirport: flight.villeArrivee.name,
          isDirect: flight.escales.length === 0 ? 'direct' : 'indirect',
          price: flight.prix
        });
      });
    }

    if (history.state && history.state.retourVol) {
      this.retourVol = history.state.retourVol;
      console.log('Retour Vol:', this.retourVol);
      this.retourVol.forEach((flight) => {
        this.returnFlight.push({
          direction: "Retour",
          airline: flight.compagnieAerienne.name,
          departureTime: new Date(flight.dateDepart).toLocaleString(),
          departureAirport: flight.villeDepart.name,
          arrivalTime: new Date(flight.dateArrivee).toLocaleString(),
          arrivalAirport: flight.villeArrivee.name,
          isDirect: flight.escales.length === 0 ? 'direct' : 'indirect',
          price: flight.prix
        });
      });
      this.regularPrice = this.outboundFlight[0].price + this.returnFlight[0].price;
      this.discountedPrice = this.regularPrice - this.savings;
    }
  }
}
