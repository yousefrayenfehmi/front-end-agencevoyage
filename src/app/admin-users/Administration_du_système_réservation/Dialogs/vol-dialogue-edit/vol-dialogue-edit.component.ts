import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Airport } from '../../../../airport';
import { Airline } from '../../../../airline';
import { ServiceService } from '../../../../service.service';

@Component({
  selector: 'app-vol-dialogue-edit',
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
    NgFor,
    NgIf
  ],
  templateUrl: './vol-dialogue-edit.component.html',
  styleUrls: ['./vol-dialogue-edit.component.scss']
})
export class VolDialogueEditComponent {
  airports: Airport[] = [];
  airlines: Airline[] = [];
  flight: any;
  isDirect: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<VolDialogueEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ServiceService
  ) {
    this.flight = { ...data };
    this.isDirect = this.flight.type === "Direct";

    this.apiService.getAllAirports().subscribe((data: Airport[]) => {
      this.airports = data;
    });

    this.apiService.getAllAirlines().subscribe((data: Airline[]) => {
      this.airlines = data;
    });
  }

  onSubmit() {
    this.flight.type = this.isDirect ? "Direct" : "Indirect";
    this.dialogRef.close(this.flight);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
