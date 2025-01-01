import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelDialogeComponent } from '../Dialogs/hotel-dialoge/hotel-dialoge.component';
import { HotelDialogeEditComponent } from '../Dialogs/hotel-dialoge-edit/hotel-dialoge-edit.component';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  hotel = [
    { id: 1, name: 'Hôtel Paris', location: 'Paris', rating: 4.5, pricePerNight: 100, description: 'Un bel hôtel situé à Paris.' },
    { id: 2, name: 'Hôtel Lyon', location: 'Lyon', rating: 4.2, pricePerNight: 80, description: 'Un hôtel confortable à Lyon.' },
    { id: 3, name: 'Hôtel Marseille', location: 'Marseille', rating: 4.3, pricePerNight: 90, description: 'Un hôtel accueillant à Marseille.' },
    { id: 4, name: 'Hôtel Nice', location: 'Nice', rating: 4.7, pricePerNight: 120, description: 'Un hôtel chic à Nice.' },
    { id: 5, name: 'Hôtel Toulouse', location: 'Toulouse', rating: 4.0, pricePerNight: 75, description: 'Un hôtel agréable à Toulouse.' },
    { id: 6, name: 'Hôtel Lille', location: 'Lille', rating: 4.1, pricePerNight: 85, description: 'Un hôtel bien situé à Lille.' },
    { id: 7, name: 'Hôtel Bordeaux', location: 'Bordeaux', rating: 4.6, pricePerNight: 110, description: 'Un hôtel élégant à Bordeaux.' },
    { id: 8, name: 'Hôtel Nantes', location: 'Nantes', rating: 4.4, pricePerNight: 95, description: 'Un hôtel moderne à Nantes.' },
    { id: 9, name: 'Hôtel Strasbourg', location: 'Strasbourg', rating: 4.8, pricePerNight: 130, description: 'Un hôtel charmant à Strasbourg.' },
    { id: 10, name: 'Hôtel Montpellier', location: 'Montpellier', rating: 4.3, pricePerNight: 100, description: 'Un hôtel accueillant à Montpellier.' }
  ];
  paginatedHotels:any[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = Math.ceil(this.hotel.length / this.itemsPerPage);
  selectedHotel: any;

  constructor(public dialog: MatDialog) {
    this.updatePaginatedHotels();
  }

  updatePaginatedHotels() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedHotels = this.hotel.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedHotels();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedHotels();
    }
  }

  handleAdd(type: string) {
    if (type === 'hotels') {
      const dialogRef = this.dialog.open(HotelDialogeComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.hotel.push(result);
          this.totalPages = Math.ceil(this.hotel.length / this.itemsPerPage);  // Recalculer les pages
          this.updatePaginatedHotels();  // Mettre à jour la pagination
        }
      });
    }
  }

  handleEdit(type: string, item: any) {
    if (type === 'Hotels') {
      const dialogRef = this.dialog.open(HotelDialogeEditComponent, {
        data: { hotel: item }
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const index = this.hotel.findIndex(hotel => hotel.id === result.id);
          if (index !== -1) {
            this.hotel[index] = result;  // Mettre à jour l'hôtel modifié
            this.updatePaginatedHotels();  // Recalculer les pages et afficher la bonne page
          }
        }
      });
    }
  }

  handleDelete(type: string, id: number) {
    this.hotel = this.hotel.filter((hotel) => hotel.id !== id);
    this.totalPages = Math.ceil(this.hotel.length / this.itemsPerPage);  // Recalculer les pages
    this.updatePaginatedHotels();  // Mettre à jour la pagination
  }

  showDescription(hotel: any) {
    this.selectedHotel = hotel;
  }

  closeDescription() {
    this.selectedHotel = null;
  }
}
