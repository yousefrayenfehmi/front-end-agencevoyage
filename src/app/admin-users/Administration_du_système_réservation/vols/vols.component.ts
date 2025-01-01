import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { VolDialogComponent } from '../Dialogs/vol-dialog/vol-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { VolDialogueEditComponent } from '../Dialogs/vol-dialogue-edit/vol-dialogue-edit.component';

@Component({
  selector: 'app-vols',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vols.component.html',
  styleUrl: './vols.component.scss'
})
export class VolsComponent {
  flights = [
    { id: 1, from: 'Paris', to: 'New York', departureTime: '2025-03-01 10:00', arrivalTime: '2025-03-01 14:00', price: 500 },
    { id: 2, from: 'Lyon', to: 'Tokyo', departureTime: '2025-03-05 15:00', arrivalTime: '2025-03-05 20:00', price: 700 }
  ];
  constructor(public dialog: MatDialog) {}

  handleAdd(type: string) {
    if (type === 'flights') {
      const dialogRef = this.dialog.open(VolDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log(result);
          
          this.flights.push(result);
        }
      });
    }

  }

  handleEdit(type: string, item: any) {
    if (type === 'flights') {
      const dialogRef = this.dialog.open(VolDialogueEditComponent, {
        data: item  
      });
      
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log('Vol modifié :', result);
          // Mettre à jour la liste des vols avec les données modifiées
          const index = this.flights.findIndex(flight => flight.id === result.id);
          if (index !== -1) {
            this.flights[index] = result;  // Mettre à jour le vol modifié
          }
        }
      });
    }
  }
  handleDelete(type: string, id: number) {
    console.log('Supprimer', type, id);
    // Implémentez ici la logique pour supprimer un vol
    if (type === 'flights') {
      this.flights = this.flights.filter((flight) => flight.id !== id);
    }
  }
}
