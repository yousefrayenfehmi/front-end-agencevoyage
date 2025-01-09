import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-inscrip',
    standalone: true,
    imports: [FormsModule, NgIf, HttpClientModule],
    templateUrl: './inscrip.component.html',
    styleUrl: './inscrip.component.scss'
})

export class InscripComponent {
  validPassword = true;
  passwordsMatch = true;
  validAge = true;
  Validform = '';
  verificationCode = '';
  code = '';
  verificationSent = false;

  confirmPassword = ''; // Champ de confirmation du mot de passe

  user = {
    nom: '',
    email: '',
    mot_de_passe: '',
    date_naissance: '',
    telephone: '',
    adresse: '',
  };

  constructor(private _service: ServiceService, private router: Router) {}

  submit() {
    if (this.formValid()) {
      this._service.resgester(this.user).subscribe(
        (response) => {
          this.code = response.code;
          this.verificationSent = true;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.Validform = 'Please fill all required fields correctly';
    }
  }

  formValid(): boolean {
    return this.validPassword && this.passwordsMatch && this.validAge && this.allFieldsFilled();
  }

  allFieldsFilled(): boolean {
    const { nom, email, mot_de_passe, date_naissance, telephone, adresse } = this.user;
    return !!(nom && email && mot_de_passe && date_naissance && telephone && adresse);
  }

  checkPasswordMatch() {
    this.passwordsMatch = this.user.mot_de_passe === this.confirmPassword;
  }

  validateDateOfBirth() {
    const today = new Date();
    const birthDate = new Date(this.user.date_naissance);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      this.validAge = age - 1 >= 18;
    } else {
      this.validAge = age >= 18;
    }
  }
}
