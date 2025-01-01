import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { VolDialogComponent } from '../Dialogs/vol-dialog/vol-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { VolDialogueEditComponent } from '../Dialogs/vol-dialogue-edit/vol-dialogue-edit.component';

@Component({
  selector: 'app-vols',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.scss']
})
export class VolsComponent {
  flights: any[] = [
    { id: 1, from: 'Paris', to: 'New York', departureTime: '2025-01-10 10:00', arrivalTime: '2025-01-10 22:00', price: 500, type: 'direct', transportCompany: 'Air France', description: 'Un vol direct entre Paris et New York, offrant un service de qualité avec Air France.' },
    { id: 2, from: 'London', to: 'Tokyo', departureTime: '2025-01-11 14:00', arrivalTime: '2025-01-12 10:00', price: 800, type: 'indirect', transportCompany: 'British Airways', description: 'Un vol avec une escale entre Londres et Tokyo, avec British Airways.' },
    { id: 3, from: 'Berlin', to: 'Rome', departureTime: '2025-01-12 08:30', arrivalTime: '2025-01-12 10:30', price: 150, type: 'direct', transportCompany: 'Lufthansa', description: 'Un vol direct rapide entre Berlin et Rome.' },
    { id: 4, from: 'Paris', to: 'Dubai', departureTime: '2025-01-13 12:00', arrivalTime: '2025-01-13 20:00', price: 600, type: 'direct', transportCompany: 'Emirates', description: 'Un vol direct luxueux entre Paris et Dubai avec Emirates.' },
    { id: 5, from: 'Los Angeles', to: 'Sydney', departureTime: '2025-01-14 17:00', arrivalTime: '2025-01-16 07:00', price: 1200, type: 'indirect', transportCompany: 'Qantas', description: 'Un vol avec plusieurs escales entre Los Angeles et Sydney, assuré par Qantas.' },
    { id: 6, from: 'Madrid', to: 'Barcelona', departureTime: '2025-01-15 09:00', arrivalTime: '2025-01-15 10:30', price: 90, type: 'direct', transportCompany: 'Iberia', description: 'Un vol court et direct entre Madrid et Barcelone, parfait pour un court séjour.' },
    { id: 7, from: 'Paris', to: 'Toronto', departureTime: '2025-01-16 11:30', arrivalTime: '2025-01-16 13:30', price: 650, type: 'direct', transportCompany: 'Air Canada', description: 'Un vol direct entre Paris et Toronto, opéré par Air Canada.' },
    { id: 8, from: 'New York', to: 'Los Angeles', departureTime: '2025-01-17 14:45', arrivalTime: '2025-01-17 17:30', price: 250, type: 'direct', transportCompany: 'American Airlines', description: 'Un vol direct entre New York et Los Angeles, un trajet populaire pour affaires et loisirs.' },
    { id: 9, from: 'Rome', to: 'London', departureTime: '2025-01-18 10:30', arrivalTime: '2025-01-18 11:45', price: 130, type: 'direct', transportCompany: 'Ryanair', description: 'Un vol économique direct entre Rome et Londres avec Ryanair.' },
    { id: 10, from: 'Paris', to: 'Singapore', departureTime: '2025-01-19 18:00', arrivalTime: '2025-01-20 06:00', price: 950, type: 'indirect', transportCompany: 'Singapore Airlines', description: 'Un vol avec escales entre Paris et Singapour, assuré par Singapore Airlines.' },
    { id: 11, from: 'Chicago', to: 'Miami', departureTime: '2025-01-20 06:00', arrivalTime: '2025-01-20 09:00', price: 180, type: 'direct', transportCompany: 'United Airlines', description: 'Un vol direct court entre Chicago et Miami, idéal pour un week-end prolongé.' },
    { id: 12, from: 'Berlin', to: 'Amsterdam', departureTime: '2025-01-21 07:00', arrivalTime: '2025-01-21 08:15', price: 120, type: 'direct', transportCompany: 'KLM', description: 'Un vol rapide direct entre Berlin et Amsterdam, parfait pour un voyage d’affaires ou un week-end.' },
    { id: 13, from: 'Tokyo', to: 'Seoul', departureTime: '2025-01-22 15:30', arrivalTime: '2025-01-22 17:00', price: 200, type: 'direct', transportCompany: 'Korean Air', description: 'Un vol direct entre Tokyo et Séoul, avec Korean Air, pour un voyage rapide.' },
    { id: 14, from: 'London', to: 'Dubai', departureTime: '2025-01-23 22:00', arrivalTime: '2025-01-24 06:00', price: 700, type: 'direct', transportCompany: 'Emirates', description: 'Un vol direct de Londres à Dubaï, avec Emirates, très confortable et pratique.' },
    { id: 15, from: 'New York', to: 'Paris', departureTime: '2025-01-24 12:00', arrivalTime: '2025-01-24 22:00', price: 600, type: 'direct', transportCompany: 'Air France', description: 'Un vol direct entre New York et Paris, offrant un service de qualité.' },
    { id: 16, from: 'Los Angeles', to: 'San Francisco', departureTime: '2025-01-25 13:00', arrivalTime: '2025-01-25 14:30', price: 100, type: 'direct', transportCompany: 'Alaska Airlines', description: 'Un vol court entre Los Angeles et San Francisco, pratique pour un voyage rapide.' },
    { id: 17, from: 'Sydney', to: 'Auckland', departureTime: '2025-01-26 09:00', arrivalTime: '2025-01-26 13:00', price: 350, type: 'direct', transportCompany: 'Air New Zealand', description: 'Un vol direct entre Sydney et Auckland, idéal pour les voyageurs daffaires ou les touristes.' },
    { id: 18, from: 'Paris', to: 'Amsterdam', departureTime: '2025-01-27 08:30', arrivalTime: '2025-01-27 09:45', price: 120, type: 'direct', transportCompany: 'Air France', description: 'Un vol direct entre Paris et Amsterdam, offrant une excellente connectivité en Europe.' },
    { id: 19, from: 'London', to: 'Paris', departureTime: '2025-01-28 15:00', arrivalTime: '2025-01-28 16:15', price: 110, type: 'direct', transportCompany: 'British Airways', description: 'Un vol direct entre Londres et Paris, idéal pour les trajets d’affaires ou personnels.' },
    { id: 20, from: 'Rome', to: 'Madrid', departureTime: '2025-01-29 07:30', arrivalTime: '2025-01-29 09:00', price: 150, type: 'direct', transportCompany: 'Iberia', description: 'Un vol direct rapide entre Rome et Madrid, pour un voyage agréable.' }
  ];
  
  itemsPerPage: number = 5;  // Afficher 5 voyages par page
  currentPage: number = 1;  // Page actuelle
  totalPages: number = 0;   // Nombre total de pages
  selectedFlight: any = null;  // Vol sélectionné pour afficher sa description

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.flights.length / this.itemsPerPage);
  }

  // Méthode pour passer à la page suivante
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Méthode pour passer à la page précédente
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Méthode pour obtenir les données paginées
  get paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.flights.slice(start, end);
  }

  handleAdd(type: string) {
    if (type === 'flights') {
      const dialogRef = this.dialog.open(VolDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.flights.push(result);
          this.totalPages = Math.ceil(this.flights.length / this.itemsPerPage);
        }
      });
    }
  }
  showDescription(flight: any) {
    this.selectedFlight = flight;  // Sélectionner le vol
  }

  closeDescription() {
    this.selectedFlight = null;  // Fermer la description
  }
  handleEdit(type: string, item: any) {
    if (type === 'flights') {
      const dialogRef = this.dialog.open(VolDialogueEditComponent, {
        data: item  
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const index = this.flights.findIndex(flight => flight.id === result.id);
          if (index !== -1) {
            this.flights[index] = result;
            this.totalPages = Math.ceil(this.flights.length / this.itemsPerPage);
          }
        }
      });
    }
  }

  handleDelete(type: string, id: number) {
    if (type === 'flights') {
      this.flights = this.flights.filter((flight) => flight.id !== id);
      this.totalPages = Math.ceil(this.flights.length / this.itemsPerPage);
    }
  }
}
