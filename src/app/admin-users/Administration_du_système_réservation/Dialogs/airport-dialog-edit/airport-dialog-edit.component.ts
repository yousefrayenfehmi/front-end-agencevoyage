import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ServiceService } from '../../../../service.service';

@Component({
  selector: 'app-airport-dialog-edit',
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
  templateUrl: './airport-dialog-edit.component.html',
  styleUrl: './airport-dialog-edit.component.scss'
})
export class AirportDialogEditComponent {
  airport: any ;
  constructor(
      public dialogRef: MatDialogRef<AirportDialogEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private apiService: ServiceService
    ) {
      // Initialiser l'objet airline avec les données existantes
      if (data) {
        this.airport = { ...data }; // Copier les données transmises
      }
    }
  onSubmit() {
    // Fermer la boîte de dialogue et renvoyer les données modifiées
    this.dialogRef.close(this.airport);
  }

  onClose(): void {
    // Fermer sans envoyer de données
    this.dialogRef.close();
  }
}
