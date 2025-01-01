import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { ServiceService } from '../service.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbCheckboxModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  validform=''
      user={
        email:'',
        mot_de_passe:''
      }
      constructor(private _service: ServiceService, private router: Router) {}
      submit() {
        if (this.user.email && this.user.mot_de_passe) {
          console.log(this.user);
          
          this._service.login(this.user).subscribe(
            (response) => {
              console.log(response);
              this._service.savetoken(response.token);
              this.validform = 'success'; 
              this.router.navigate(['/profil']);
            },
            (err) => {
              if (err.error.type == "mdpIncorrect") {
                this.validform = 'Password Incorrect';
              } else if (err.error.type == "mailIncorrect") {
                this.validform = 'Compte introuvable';
              } else {
                console.error('Erreur lors de la connexion', err);
                this.validform = 'An unexpected error occurred';
              }
            }
          );
        } else {
          this.validform = 'Please fill all required fields';
        }
      }
}
