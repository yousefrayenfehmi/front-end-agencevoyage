import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Destination, DestinationService } from '../destination-service.service';
import { VolsRechercheComponent } from "../vols-recherche/vols-recherche.component";
import {MatTabsModule} from '@angular/material/tabs';
import { HotelsSearchComponent } from "../hotels-search/hotels-search.component";
import { PackageSearchComponent } from "../package-search/package-search.component";
import { CarRentalSearchComponent } from "../car-rental-search/car-rental-search.component";
import { FlightCardComponent } from "../flight-card/flight-card.component";
import { VolsComponent } from '../admin-users/Administration_du_système_réservation/vols/vols.component';
import { VolService } from '../vol.service';
@Component({
    selector: 'app-home',
    imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, MatFormFieldModule,
        MatInputModule, VolsRechercheComponent, MatTabsModule, HotelsSearchComponent, PackageSearchComponent, CarRentalSearchComponent, FlightCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  featuredDestinations: Destination[] = [];
  vols:any[]=[];
  constructor(private destinationService: DestinationService) {}
  ngOnInit() {
      
      this.featuredDestinations = this.destinationService.getDestinations();
      
      
  }


}