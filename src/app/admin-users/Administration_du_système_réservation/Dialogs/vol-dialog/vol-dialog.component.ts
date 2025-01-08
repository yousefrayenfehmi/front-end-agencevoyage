import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';  // Importation correcte
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceService } from '../../../../service.service';
import { NgFor, NgIf } from '@angular/common';
import { Airport } from '../../../../airport';
import { Airline } from '../../../../airline';

@Component({
    selector: 'app-vol-dialog',
    standalone: true,
    imports: [
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        FormsModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgFor, NgIf
    ],
    providers: [MatDatepickerModule],
    templateUrl: './vol-dialog.component.html',
    styleUrls: ['./vol-dialog.component.scss']
})


export class VolDialogComponent {
  
  flight = {
    villeDepart: '',
    villeArrivee: '',
    dateDepart: '',
    dateArrivee: '',
    prix: null,
    compagnieAerienne: '',
    nombrePlaces: null,
    description: '',
    photos: [],
    classe: 'Economique',
    escales: []
  };

  

  constructor(private apiService: ServiceService, private dialogRef: MatDialogRef<VolDialogComponent>) {}
  airports: Airport[] = [];
  airlines: Airline[] = [];
  ngOnInit() {
    this.apiService.getAllAirports().subscribe((data: Airport[]) => {
      this.airports = data;
    });

    this.apiService.getAllAirlines().subscribe((data: Airline[]) => {
      this.airlines = data;
    });
  }

  onSubmit() {
    console.log(this.flight);
    this.apiService.addVol(this.flight).subscribe((response) => {
      console.log('Flight added successfully', response);
    });
  }

  onClose() {
    this.dialogRef.close();  }
}