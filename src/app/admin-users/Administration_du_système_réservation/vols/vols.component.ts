import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { VolDialogComponent } from '../Dialogs/vol-dialog/vol-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { VolDialogueEditComponent } from '../Dialogs/vol-dialogue-edit/vol-dialogue-edit.component';
import { VolService } from '../../../vol.service';
import { ServiceService } from '../../../service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-vols',
    imports: [NgFor, NgIf,CommonModule ],
    standalone: true, // Ajoutez cette ligne
    templateUrl: './vols.component.html',
    styleUrls: ['./vols.component.scss']
})
export class VolsComponent {
  flights: any[] = []; // List of flights
itemsPerPage: number = 5; // Number of flights per page
currentPage: number = 1; // Current page number
totalPages: number = 0; // Total number of pages
selectedFlight: any = null; // Selected flight for viewing description
paginatedData: any[] = [];

constructor(public dialog: MatDialog, private volService: ServiceService) {}

ngOnInit(): void {
  this.fetchFlights();
}

fetchFlights(): void {
  this.volService.getAllVols().subscribe((data: any[]) => {
    this.flights = data;
    console.log(this.flights)
    this.calculatePagination();
  });
}
calculatePagination(): void {
  this.totalPages = Math.ceil(this.flights.length / this.itemsPerPage);
  this.updatePaginatedData();
}

updatePaginatedData(): void {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
  this.paginatedData = this.flights.slice(start, end);
}
/**
 * Update pagination details based on the flights array.
 */
updatePagination(): void {
  this.totalPages = Math.ceil(this.flights.length / this.itemsPerPage);
  this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
}

/**
 * Navigate to the next page.
 */
nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}

/**
 * Navigate to the previous page.
 */
previousPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}



/**
 * Handle adding a new flight via a dialog.
 */
handleAdd(type: string): void {
  if (type === 'flights') {
    const dialogRef = this.dialog.open(VolDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.flights.push(result);
        this.updatePagination();
      }
    });
  }
}

/**
 * Handle editing an existing flight via a dialog.
 */
handleEdit(type: string, flight: any): void {
  if (type === 'flights') {
    const dialogRef = this.dialog.open(VolDialogueEditComponent, { data: flight });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        
        this.volService.updateVol(result._id,result).subscribe(() => {
          this.fetchFlights();
        })
        
      }
      else{
        console.log('8alet');
        
      }
    });
  }
}

/**
 * Handle deleting a flight by ID.
 */
handleDelete(type: string, id: string): void {
  if (type === 'flights') {
    const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer ce vol ?');
    console.log(id);
    if (confirmDelete) {
      this.volService.deleteVol(id).subscribe(() => {
        console.log('tfasa5');
        
      });
      this.updatePagination();
    }
  }
}

/**
 * Show description of the selected flight.
 */
showDescription(flight: any): void {
  this.selectedFlight = flight;
}

/**
 * Close the description modal.
 */
closeDescription(): void {
  this.selectedFlight = null;
}
}