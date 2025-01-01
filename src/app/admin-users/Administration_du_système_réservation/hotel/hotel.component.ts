import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelDialogeComponent } from '../Dialogs/hotel-dialoge/hotel-dialoge.component';
import { HotelDialogeEditComponent } from '../Dialogs/hotel-dialoge-edit/hotel-dialoge-edit.component';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent {
  hotels = [
    { id: 1, name: 'Hôtel Paris', location: 'Paris', rating: 4.5, pricePerNight: 100 },
    { id: 2, name: 'Hôtel Lyon', location: 'Lyon', rating: 4.2, pricePerNight: 80 }
  ];
  constructor(public dialog: MatDialog) {}

 handleAdd(type: string) {
     if (type === 'hotels') {
       const dialogRef = this.dialog.open(HotelDialogeComponent);
       dialogRef.afterClosed().subscribe((result) => {
         if (result) {
           console.log(result);
           
           this.hotels.push(result);
         }
       });
     }
 
   }
  handleEdit(type: string, item: any) {
     if (type === 'Hotels') {
      console.log(item);
      
       const dialogRef = this.dialog.open(HotelDialogeEditComponent, {
        data: { hotel: item }
      });
       
       dialogRef.afterClosed().subscribe((result) => {
         if (result) {
           console.log('Vol modifié :', result);
           // Mettre à jour la liste des vols avec les données modifiées
           const index = this.hotels.findIndex(hotel => hotel.id === result.id);
           if (index !== -1) {
             this.hotels[index] = result;  // Mettre à jour le vol modifié
           }
         }
       });
     }
   }

  handleDelete(type: string, id: number) {

    this.hotels = this.hotels.filter((hotel) => hotel.id !== id); 
  }

}
