import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this line
@Component({
    selector: 'app-profil',
    imports: [CommonModule, FormsModule],
    templateUrl: './profil.component.html',
    styleUrl: './profil.component.scss'
})
export class ProfilComponent implements OnInit {

  userProfile: any = null;
  isLoggedIn: boolean = false;
  newAdresse :string="";
  newNom :string="";
  newTelephone :string="";
  constructor(private _service: ServiceService, private router: Router) {}


  ngOnInit(): void {
    if(this._service.getToken()){
    this._service.getUserByToken().subscribe(
      (response) => {
        this.userProfile = response; // Store user data
        console.log(response);
        console.log(this.userProfile);
        this.newAdresse=this.userProfile.adresse;
        this.newNom=this.userProfile.nom;
        this.newTelephone=this.userProfile.telephone;
        this.isLoggedIn = true;
      },
      (err) => {
        console.error('Error fetching user profile:', err);
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
        alert("sign in"); 
      }
    );
  }else{
    this.isLoggedIn = false;
        this.router.navigate(['/login']);
        alert("sign in"); 
  }
  }

  editProfile() {
    this.router.navigate(['/edit-profile']); // Redirect to edit profile page
  }
  updateProfile(): void {
    const oldUser=this.userProfile;
    this.userProfile.nom=this.newNom;
    this.userProfile.adresse=this.newAdresse;
    this.userProfile.telephone=this.newTelephone;
    this._service.updateUser(this.userProfile._id, this.userProfile).subscribe(
      (response) => {
        this.newAdresse="";
        this.newNom="";
        this.newTelephone="";
        console.log('User updated successfully:', response);
      },
      (error) => {
        this.userProfile=oldUser;
        console.error('Error updating user:', error);
      }
    );
  }
  logout() {
    this._service.logout();
    this.router.navigate(['/login']); 
  }

  
}