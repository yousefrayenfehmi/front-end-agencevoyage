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
  standalone: true,
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

  savings=40

  constructor(private service: VolService, private router: Router) {}

  ngOnInit(): void {
    console.log(history.state.vole);
    
    if (history.state && history.state.allerVol) {
      this.allerVol = history.state.allerVol;
      console.log('Aller Vol:', this.allerVol);
      this.allerVol.forEach((flight) => {
        this.outboundFlight.push({
          direction: "Aller",
          id: flight.id,
          airline: flight.transportCompany,
          departureTime: flight.departureTime,
          departureAirport: flight.from,
          arrivalTime: flight.arrivalTime,
          arrivalAirport: flight.to,
          isDirect: flight.isDirect?"direct":"indirect",
          price: flight.price
        });
      })
    }
  
    if (history.state && history.state.retourVol) {
      this.retourVol = history.state.retourVol;
      console.log('Retour Vol:', this.retourVol);
      this.retourVol.forEach((flight) => {
        this.returnFlight.push({
          direction: "Retour",
          id: flight.id,
          airline: flight.transportCompany,
          departureTime: flight.departureTime,
          departureAirport: flight.from,
          arrivalTime: flight.arrivalTime,
          arrivalAirport: flight.to,
          isDirect: flight.isDirect?"direct":"indirect",
          price: flight.price
        });
      })
    }
   
  }

  commande(voles:any){
    console.log(voles);
    
    this.router.navigate(['/put'], { state: { vole: voles,uservol:history.state.vole} });
    
}
  
}
