import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VolService } from '../vol.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importing FormsModule for ngModel
import { ServiceService } from '../service.service';

interface Flight {
  id: string;
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
  imports: [NgIf, CommonModule, FormsModule],  // Including FormsModule for ngModel
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {
  flights: any[] = [];
  allerVol: any[] = [];
  retourVol: any[] = [];
  @Input() data: any; // Receiving data from another component
  outboundFlight: Flight[] = []; // Array of outbound flights
  returnFlight: Flight[] = []; // Array of return flights

  // Filter variables
  priceFilter: number = 0;  // Min price filter
  airlineFilter: string = ''; // Airline filter
  departureCityFilter: string = ''; // Departure city filter
  arrivalCityFilter: string = ''; // Arrival city filter

  regularPrice: number = 0;
  discountedPrice: number = 0;
  savings = 40;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    console.log(history.state);

    // Check if data is available in history state
    if (history.state && history.state.voles) {
      this.allerVol = history.state.voles;
      console.log('Aller Vol:', this.allerVol);

      // Populate outbound flight data
      this.allerVol.forEach((flight) => {
        this.outboundFlight.push({
          direction: 'Aller',
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
  loadAndFilterFlights() {
    // Fetch flights from the backend
    this.service.getAllVols().subscribe((flights: any) => {
      // Store all fetched flights in the 'outboundFlight' array
      this.outboundFlight = flights.map((flight: any) => ({
        direction: 'Aller',
        airline: flight.compagnieAerienne.name,
        departureTime: new Date(flight.dateDepart).toLocaleString(),
        departureAirport: flight.villeDepart.name,
        arrivalTime: new Date(flight.dateArrivee).toLocaleString(),
        arrivalAirport: flight.villeArrivee.name,
        isDirect: flight.escales.length === 0 ? 'direct' : 'indirect',
        price: flight.prix,
        id: flight._id,
      }));
  
      // Apply filters after loading data
      this.getFilteredFlights();
    });
  }
  
  getFilteredFlights() {
    return this.outboundFlight.filter(flight => {
      // Filter by price
      const matchesPrice = this.priceFilter ? flight.price >= this.priceFilter : true;

      // Filter by airline
      const matchesAirline = this.airlineFilter ? flight.airline.toLowerCase().includes(this.airlineFilter.toLowerCase()) : true;

      // Filter by departure city
      const matchesDepartureCity = this.departureCityFilter ? flight.departureAirport.toLowerCase().includes(this.departureCityFilter.toLowerCase()) : true;

      // Filter by arrival city
      const matchesArrivalCity = this.arrivalCityFilter ? flight.arrivalAirport.toLowerCase().includes(this.arrivalCityFilter.toLowerCase()) : true;

      return matchesPrice && matchesAirline && matchesDepartureCity && matchesArrivalCity;
    });
  }

  // Command function to handle flight selection and navigation
  commande(voleselectionne: any) {
    console.log(voleselectionne);
    if(this.service.getToken()){
      this.service.getUserByToken().subscribe(
        (response) => {
          this.router.navigate(['/put'], { state: { vole: voleselectionne, uservol: history.state.userInfo } });

          
        },
        (err) => {
          console.error('Error fetching user profile:', err);
          this.router.navigate(['/login']);
          alert("sign in"); 
        }
      );
  
    }else{
      this.router.navigate(['/login']);
        alert("sign in"); 
    }
  }
}
