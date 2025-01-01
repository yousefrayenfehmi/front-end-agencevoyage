import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-hotel-dialoge',
  standalone: true,
 imports: [ MatDialogModule,
     MatInputModule,
     MatFormFieldModule,
     MatButtonModule, FormsModule],
  templateUrl: './hotel-dialoge.component.html',
  styleUrl: './hotel-dialoge.component.scss'
})
export class HotelDialogeComponent {
constructor(public dialogRef: MatDialogRef<HotelDialogeComponent>) {}
  Hotel = { name: '', location: '', rating: '', pricePerNight: '', description: '' };

  onSubmit() {
    console.log('Vol ajouté :', this.Hotel);
    this.dialogRef.close(this.Hotel);
  }

  onClose() {
    this.dialogRef.close();
  }
}
