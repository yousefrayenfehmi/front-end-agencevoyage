import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-car-rental-search',
  standalone: true,
imports: [ MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule],
  templateUrl: './car-rental-search.component.html',
  styleUrl: './car-rental-search.component.scss'
})
export class CarRentalSearchComponent {

}
