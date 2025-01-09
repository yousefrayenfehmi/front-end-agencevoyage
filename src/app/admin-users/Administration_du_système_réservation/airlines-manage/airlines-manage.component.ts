import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../../../service.service';
import { AirlineDialogEditComponent } from '../Dialogs/airline-dialog-edit/airline-dialog-edit.component';
import { AirlineDialogComponent } from '../Dialogs/airline-dialog/airline-dialog.component';
@Component({
  selector: 'app-airlines-manage',
  imports: [NgFor, NgIf],
  templateUrl: './airlines-manage.component.html',
  styleUrl: './airlines-manage.component.scss'
})
export class AirlinesManageComponent {
  airlines: any[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalPages: number = 0;
  selectedAirline: any = null;

  constructor(public dialog: MatDialog, private service: ServiceService) {}

  ngOnInit(): void {
    this.fetchAirlines();
  }

  fetchAirlines() {
    this.service.getAllAirlines().subscribe(
      (data) => {
        this.airlines = data;
        this.totalPages = Math.ceil(this.airlines.length / this.itemsPerPage);
      },
      (error) => {
        console.error('Error fetching airlines:', error);
      }
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.airlines.slice(start, end);
  }

  handleAdd(type: string) {
    if (type === 'airline') {
      const dialogRef = this.dialog.open(AirlineDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.airlines.push(result);
          this.totalPages = Math.ceil(this.airlines.length / this.itemsPerPage);
        }
      });
    }
  }

  showDescription(airline: any) {
    this.selectedAirline = airline;
  }

  closeDescription() {
    this.selectedAirline = null;
  }

  handleEdit(type: string, item: any) {
    if (type === 'airline') {
      const dialogRef = this.dialog.open(AirlineDialogEditComponent, {
        data: item,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.service.updateAirline(result._id, result).subscribe(() => {
            console.log("tbadel");
            
          })
        }
      });
    }
  }

  handleDelete(type: string, id: string) {
    if (type === 'airline') {
      console.log(id);
      this.service.deleteAirline(id).subscribe(() => {
        console.log("tfasa5");
        
      })
     
    }
  }
}