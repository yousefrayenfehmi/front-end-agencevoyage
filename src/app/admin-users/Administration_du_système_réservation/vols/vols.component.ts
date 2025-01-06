import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { VolDialogComponent } from '../Dialogs/vol-dialog/vol-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { VolDialogueEditComponent } from '../Dialogs/vol-dialogue-edit/vol-dialogue-edit.component';
import { VolService } from '../../../vol.service';

@Component({
  selector: 'app-vols',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.scss']
})
export class VolsComponent {
  flights :any[] = [];
  itemsPerPage: number = 5;  // Afficher 5 voyages par page
  currentPage: number = 1;  // Page actuelle
  totalPages: number = 0;   // Nombre total de pages
  selectedFlight: any = null;  // Vol sélectionné pour afficher sa description

  constructor(public dialog: MatDialog,private volService:VolService) {}

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.flights.length / this.itemsPerPage);
    this.flights=this.volService.flights;
    console.log(this.flights);
    
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
