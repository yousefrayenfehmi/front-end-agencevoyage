import { Component } from '@angular/core';
import { ServiceService } from '../../../../service.service';
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

@Component({
  selector: 'app-airport-dialog',
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
        MatNativeDateModule
    ],
  templateUrl: './airport-dialog.component.html',
  styleUrl: './airport-dialog.component.scss'
})
export class AirportDialogComponent {
  airport = {
    name: '',
    code: '',
    city: '',
    country: ''
  };

  constructor(
    private service: ServiceService,
    private dialogRef: MatDialogRef<AirportDialogComponent>
  ) {}

  onSubmit() {
    this.service.addAirport(this.airport).subscribe(
      (response) => {
        console.log('Airport added successfully:', response);
        this.dialogRef.close(true); // Close dialog and indicate success
      },
      (error) => {
        console.error('Error adding airport:', error);
      }
    );
  }

  onClose() {
    this.dialogRef.close(); // Close dialog without saving
  }
}
