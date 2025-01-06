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
    MatNativeDateModule
  ],
  templateUrl: './vol-dialog.component.html',
  styleUrls: ['./vol-dialog.component.scss']
})
export class VolDialogComponent {

  // Initialisation des valeurs par défaut pour les champs de formulaire
  isDirect = false;
  flight = {
    from: '',
    to: '',
    departureTime: '',
    arrivalTime: '',
    price: 0,
    type: '',
    travelClass: '',
    transportCompany: '',
    description: ''
  };

  constructor(public dialogRef: MatDialogRef<VolDialogComponent>) {}

  // Soumission du formulaire
  onSubmit() {
    // Vérification si le vol est direct ou indirect
    this.flight.type = this.isDirect ? 'Direct' : 'Indirect';
    
    // Afficher les informations du vol dans la console
    console.log('Vol ajouté :', this.flight);
    
    // Fermer le dialog avec les informations du vol
    this.dialogRef.close(this.flight);
  }

  // Annuler et fermer le dialog
  onClose() {
    this.dialogRef.close();
  }
}
