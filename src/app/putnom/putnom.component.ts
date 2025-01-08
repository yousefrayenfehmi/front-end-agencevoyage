import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms'; // Importer Reactive Forms
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { Router } from '@angular/router';

// Déclarer l'interface en dehors du composant
interface Reserve {
  idvoyage: string;
  nombrepassager: number;
  passagers: any[];
  prix:number;
}

@Component({
  selector: 'app-putnom',
  standalone: true,
  imports: [
    CommonModule, NgFor, MatCard, MatLabel, MatOption, MatFormField,
    MatSelect, MatRadioGroup, MatRadioButton, MatCardHeader,
    MatCardContent, MatIcon, MatCardTitle, ReactiveFormsModule,NgIf // Added ReactiveFormsModule
  ],
  templateUrl: './putnom.component.html',
  styleUrls: ['./putnom.component.scss']
})
export class PutnomComponent  {  // Implement AfterViewInit
  uservol: any;
  passagesArray: number[] = []; // Array pour la boucle *ngFor
  months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  days = Array.from({ length: 31 }, (_, i) => i + 1); // Créer un tableau des jours [1, 2, 3, ..., 31]
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); // Créer un tableau pour les années

  // Typage explicite du FormArray avec FormGroup
  passengersFormArray: FormArray<FormGroup> = new FormArray<FormGroup>([]);

  ngOnInit() {
    console.log(history.state.vole);
    if (history.state && history.state.uservol) {
      this.uservol = history.state.uservol;
      
      // Si `uservol.passage` est un nombre, générer un tableau pour les passages et créer des form groups
      if (typeof this.uservol.passage === 'number') {
        this.passagesArray = Array.from({ length: this.uservol.passage }, (_, i) => i);
        this.initializePassengersForm(); // Initialiser le formulaire pour chaque passager
      }
    }

    console.log(this.passagesArray); // Vérification du tableau passagesArray
  }
  // Initialiser le formulaire pour chaque passager
  initializePassengersForm() {
    this.passagesArray.forEach(() => {
      const passengerForm = new FormGroup({
        title: new FormControl('', Validators.required), // Champ pour le titre (M. ou Mme)
        firstName: new FormControl('', Validators.required), // Champ pour le prénom
        lastName: new FormControl('', Validators.required), // Champ pour le nom
        day: new FormControl('', Validators.required), // Champ pour le jour
        month: new FormControl('', Validators.required), // Champ pour le mois
        year: new FormControl('', Validators.required) // Champ pour l'année
      });

      this.passengersFormArray.push(passengerForm);
      console.log(this.passengersFormArray);
    });
  }

  constructor(public dialog: MatDialog,private router:Router) {}

 

  // Fonction pour soumettre le formulaire
  onSubmit() {
    if (this.passengersFormArray.valid) {
      // Création d'un objet reserve
      const reservation: Reserve = {
        idvoyage: history.state.vole.id,
        nombrepassager: this.passagesArray.length,
        passagers: this.passengersFormArray.value,
        prix:this.passagesArray.length*history.state.vole.price
      };

    this.router.navigate(['/paypal'],{state:{reserve:reservation}})
      
  }

 
}
getPassengerForm(index: number): FormGroup {
  return this.passengersFormArray.at(index) as FormGroup;
}
}