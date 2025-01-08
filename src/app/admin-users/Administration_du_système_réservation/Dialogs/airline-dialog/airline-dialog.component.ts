import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceService } from '../../../../service.service';

@Component({
  selector: 'app-airline-dialog',
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
  ],
  templateUrl: './airline-dialog.component.html',
  styleUrl: './airline-dialog.component.scss'
})
export class AirlineDialogComponent {
  airline = {
    name: '',
    iataCode: '',
    country: ''
  };

  constructor(
    private service: ServiceService,
    private dialogRef: MatDialogRef<AirlineDialogComponent>
  ) {}

  onSubmit() {
    this.service.addAirline(this.airline).subscribe(
      (response) => {
        console.log('Airline added successfully:', response);
        this.dialogRef.close(true); // Close dialog and indicate success
      },
      (error) => {
        console.error('Error adding airline:', error);
      }
    );
  }

  onClose() {
    this.dialogRef.close(); // Close dialog without saving
  }
}
