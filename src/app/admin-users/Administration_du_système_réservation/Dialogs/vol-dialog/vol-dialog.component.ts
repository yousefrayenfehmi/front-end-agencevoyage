import { Component } from '@angular/core';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-vol-dialog',
  standalone: true,
  imports: [ MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, FormsModule],
  templateUrl: './vol-dialog.component.html',
  styleUrl: './vol-dialog.component.scss'
})
export class VolDialogComponent {

  constructor(public dialogRef: MatDialogRef<VolDialogComponent>) {}
  flight = { from: '', to: '', departureTime: '', arrivalTime: '', price: '' };

  onSubmit() {
    // Logique pour ajouter le vol
    console.log('Vol ajouté :', this.flight);
    this.dialogRef.close(this.flight);
  }

  onClose() {
    this.dialogRef.close();
  }
}
