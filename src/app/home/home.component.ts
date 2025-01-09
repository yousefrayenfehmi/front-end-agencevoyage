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
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
    selector: 'app-home',
    imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, MatFormFieldModule,
        MatInputModule, VolsRechercheComponent, MatTabsModule, HotelsSearchComponent, PackageSearchComponent, CarRentalSearchComponent, FlightCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  featuredDestinations: any[] = [];
  vols:any[]=[];
  constructor(private destinationService: DestinationService,private service:ServiceService,private router: Router) {}
  ngOnInit() {
      
      this.service.getVolsOnOffer().subscribe((vols) => {
        this.featuredDestinations = vols;
        console.log(vols);
      });
      
  }

  commande(voles:any){
    console.log(voles);
    this.router.navigate(['/put'], { state: { vole: voles,uservol:history.state.userInfo} });
}

}