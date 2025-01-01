import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-hotel-dialoge-edit',
  standalone: true,
 imports: [ MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule, FormsModule],
  templateUrl: './hotel-dialoge-edit.component.html',
  styleUrl: './hotel-dialoge-edit.component.scss'
})
export class HotelDialogeEditComponent {
  Hotel: any;

  constructor(
    public dialogRef: MatDialogRef<HotelDialogeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Données reçues:', data);

    this.Hotel = { ...data.hotel };  
    console.log('Objet Hotel:', this.Hotel);
  }

  onSubmit() {
    this.dialogRef.close(this.Hotel);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
