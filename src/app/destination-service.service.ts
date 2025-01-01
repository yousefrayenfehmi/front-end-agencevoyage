import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: Destination[] = [
    { id: 1, name: 'Santorini', country: 'Grèce', description: 'Îles pittoresques aux maisons blanches et bleues', price: 1500, imageUrl: '/assets/images/OSK.jpeg', rating: 4.8 },
    { id: 2, name: 'Kyoto', country: 'Japon', description: 'Ancienne capitale impériale riche en culture', price: 2000, imageUrl: '/assets/images/kyoto.jpg', rating: 4.7 },
    { id: 3, name: 'Machu Picchu', country: 'Pérou', description: 'Cité inca mystérieuse dans les Andes', price: 1800, imageUrl: '/assets/images/machu-picchu.jpg', rating: 4.9 },
    { id: 4, name: 'Bora Bora', country: 'Polynésie française', description: 'Paradis tropical avec des eaux cristallines', price: 3000, imageUrl: '/assets/images/bora-bora.jpeg', rating: 4.9 },
    { id: 5, name: 'Marrakech', country: 'Maroc', description: 'Ville impériale aux souks colorés', price: 1200, imageUrl: '/assets/images/marrakech.jpeg', rating: 4.6 },
  ];

  getDestinations(){
    return (this.destinations);
  }
}
