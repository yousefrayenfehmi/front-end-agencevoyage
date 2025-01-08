import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AirlinesManageComponent } from '../airlines-manage/airlines-manage.component';
import { AirpotsManageComponent } from '../airpots-manage/airpots-manage.component';
import { VolsComponent } from "../vols/vols.component";

@Component({
    selector: 'app-administration',
    standalone: true,
    imports: [MatTabGroup, MatTab, VolsComponent,AirpotsManageComponent,AirlinesManageComponent],
    templateUrl: './administration.component.html',
    styleUrl: './administration.component.scss'
})
export class AdministrationComponent {
  activeTab: string = 'hotels';

  hotels = [
    { id: 1, name: 'Hôtel ABC', location: 'Paris', rating: 4, pricePerNight: 100 },
    { id: 2, name: 'Hôtel XYZ', location: 'Lyon', rating: 3, pricePerNight: 80 }
  ];

  packages = [
    { id: 1, name: 'Forfait Paris', destination: 'Paris', duration: 7, price: 500 },
    { id: 2, name: 'Forfait Lyon', destination: 'Lyon', duration: 5, price: 400 }
  ];

  carRentals = [
    { id: 1, model: 'Peugeot 208', brand: 'Peugeot', pricePerDay: 30 },
    { id: 2, model: 'Renault Clio', brand: 'Renault', pricePerDay: 25 }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  handleAdd(type: string) {
    console.log('Ajouter un', type);
    // Implémenter la logique d'ajout ici
  }

  handleEdit(type: string, item: any) {
    console.log('Modifier', type, item);
    // Implémenter la logique de modification ici
  }

  handleDelete(type: string, id: number) {
    console.log('Supprimer', type, id);
    // Implémenter la logique de suppression ici
    switch (type) {
      case 'hotels':
        this.hotels = this.hotels.filter((hotel) => hotel.id !== id);
        break;
      case 'packages':
        this.packages = this.packages.filter((pkg) => pkg.id !== id);
        break;
      case 'carRentals':
        this.carRentals = this.carRentals.filter((car) => car.id !== id);
        break;
    }
  }
}
