import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-vol-dialogue-edit',
  standalone: true,
  imports: [MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule, FormsModule],
  templateUrl: './vol-dialogue-edit.component.html',
  styleUrl: './vol-dialogue-edit.component.scss'
})
export class VolDialogueEditComponent {
  flight: any;

  constructor(
    public dialogRef: MatDialogRef<VolDialogueEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.flight = { ...data }; 
  }

  onSubmitEdit() {
    this.dialogRef.close(this.flight);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
