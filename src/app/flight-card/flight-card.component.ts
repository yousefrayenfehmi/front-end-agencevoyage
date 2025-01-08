import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VolService } from '../vol.service';
import { Router } from '@angular/router';

interface Flight {
  id:string;
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
    console.log(history.state);
    
    if (history.state && history.state.voles) {
      this.allerVol = history.state.voles;
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
          price: flight.prix,
          id: flight._id,
          
        });
      });
    }

    
         
      
    }
   
  

  commande(voles:any){
    console.log(voles);
    
    this.router.navigate(['/put'], { state: { vole: voles,uservol:history.state.userInfo} });
    
}
  
}
