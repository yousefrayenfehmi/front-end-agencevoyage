import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms'; // Assurez-vous d'importer cela si vous utilisez un standalone component
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-payment-dialog',
  standalone: true,
  imports: [
    CommonModule, NgIf, MatCardModule, MatDialogModule,MatOption,MatSelect,MatFormField,MatLabel,ReactiveFormsModule 
  ],
    templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss'] // Correction : "styleUrl" devient "styleUrls"
})
export class PaymentDialogComponent {
  paymentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.paymentForm = new FormGroup({
      modePaiement: new FormControl('', Validators.required) 
    });
  }

  onConfirm(): void {
    if (this.paymentForm.valid) {
      console.log(this.paymentForm.valid);
      
      this.dialogRef.close(this.paymentForm.value); 
    }
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }
}
