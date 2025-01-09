import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../../../../service.service';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-airline-dialog-edit',
  templateUrl: './airline-dialog-edit.component.html',
  styleUrls: ['./airline-dialog-edit.component.scss'],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    NgFor,
    NgIf,
    MatDialogContent
  ]
})
export class AirlineDialogEditComponent {
  airline: any = {}; // Initialisation de l'objet airline

  constructor(
    public dialogRef: MatDialogRef<AirlineDialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ServiceService
  ) {
    // Initialiser l'objet airline avec les données existantes
    if (data) {
      this.airline = { ...data }; // Copier les données transmises
    }
  }

  onSubmit() {
    // Fermer la boîte de dialogue et renvoyer les données modifiées
    this.dialogRef.close(this.airline);
  }

  onClose(): void {
    // Fermer sans envoyer de données
    this.dialogRef.close();
  }
}
