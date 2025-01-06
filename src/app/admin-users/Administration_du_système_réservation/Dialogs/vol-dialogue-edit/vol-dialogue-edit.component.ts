import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-vol-dialogue-edit',
  standalone: true,
  imports: [MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule, FormsModule,MatCheckboxModule,MatOption],
  templateUrl: './vol-dialogue-edit.component.html',
  styleUrl: './vol-dialogue-edit.component.scss'
})
export class VolDialogueEditComponent {
  flight: any;
  isDirect:boolean=false;
  constructor(
    public dialogRef: MatDialogRef<VolDialogueEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.flight = { ...data };
    if(this.flight.type=="Direct"){this.isDirect=true}
    else{this.isDirect=false}
  }

  onSubmit() {
    if(this.isDirect){
      this.flight.type="Direct"
    }
    else{
      this.flight.type="Indirect"
    }
    this.dialogRef.close(this.flight);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
