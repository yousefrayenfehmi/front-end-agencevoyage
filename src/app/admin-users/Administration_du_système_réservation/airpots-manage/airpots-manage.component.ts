import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../../../service.service';
import { AirportDialogEditComponent } from '../Dialogs/airport-dialog-edit/airport-dialog-edit.component';
import { AirportDialogComponent } from '../Dialogs/airport-dialog/airport-dialog.component';

@Component({
  selector: 'app-airpots-manage',
  imports: [NgFor, NgIf],
  templateUrl: './airpots-manage.component.html',
  styleUrl: './airpots-manage.component.scss'
})
export class AirpotsManageComponent {
  airports :any[] = [];
  itemsPerPage: number = 5;  // Afficher 5 voyages par page
  currentPage: number = 1;  // Page actuelle
  totalPages: number = 0;   // Nombre total de pages
  selectedAirport: any = null;  // Vol sélectionné pour afficher sa description

  constructor(public dialog: MatDialog,private service:ServiceService) {}

  ngOnInit(): void {
    this.fetchAirports();
    
  }
  fetchAirports() {
    this.service.getAllAirports().subscribe(
      (data) => {
        this.airports = data; // Assign the data to the local variable
        console.log(this.airports); // Debugging: Log the airports
      },
      (error) => {
        console.error('Error fetching airports:', error); // Handle errors
      }
    );
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
    return this.airports.slice(start, end);
  }

  handleAdd(type: string) {
    if (type === 'airport') {
      const dialogRef = this.dialog.open(AirportDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.airports.push(result);
          this.totalPages = Math.ceil(this.airports.length / this.itemsPerPage);
        }
      });
    }
  }
  showDescription(flight: any) {
    this.selectedAirport = flight;  // Sélectionner le vol
  }

  closeDescription() {
    this.selectedAirport = null;  // Fermer la description
  }
  handleEdit(type: string, item: any) {
    if (type === 'airpots') {
      const dialogRef = this.dialog.open(AirportDialogEditComponent, {
        data: item  
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const index = this.airports.findIndex(flight => flight.id === result.id);
          if (index !== -1) {
            this.airports[index] = result;
            this.totalPages = Math.ceil(this.airports.length / this.itemsPerPage);
          }
        }
      });
    }
  }

  handleDelete(type: string, id: number) {
    if (type === 'airpots') {
      this.airports = this.airports.filter((flight) => flight.id !== id);
      this.totalPages = Math.ceil(this.airports.length / this.itemsPerPage);
    }
  }
}
