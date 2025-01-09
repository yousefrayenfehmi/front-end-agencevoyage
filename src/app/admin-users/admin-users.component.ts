import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-users',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './admin-users.component.html',
    styleUrl: './admin-users.component.scss'
})

export class AdminUsersComponent implements OnInit {
  users: any[] = [];
  isLoading = true;
  userProfile: any = null;
   isLoggedIn =false
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    if(this.service.getToken()){
      this.service.getUserByToken().subscribe(
        (response) => {
          this.userProfile = response; // Store user data
          console.log(response);
          console.log(this.userProfile);
          if (this.userProfile.roles && this.userProfile.roles.includes('admin')) {
            console.log('User is an admin');
            this.isLoggedIn = true;
            this.getAllUsers();
          } else {
            this.isLoggedIn = false;
          this.router.navigate(['/login']);
          alert("sign in"); 
          }
          
        },
        (err) => {
          console.error('Error fetching user profile:', err);
          
        }
      );
    }else{
      this.isLoggedIn = false;
          this.router.navigate(['/login']);
          alert("sign in"); 
    }

    

  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(
      (res) => {
        this.users = res;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }

  updateUser(user: any) {
    const updatedData = {}
    this.service.updateUser(user.id, updatedData).subscribe(
      (res) => {
        console.log('User updated successfully', 'Close', { duration: 3000 });
        this.getAllUsers(); // Refresh users list
      },
      (err) => {
        console.log('Error updating user', 'Close', { duration: 3000 });
      }
    );
  }

  deleteUser(user: any) {
    if (confirm('Are you sure you want to delete this user?')) {
      console.log(user);
      
      this.service.deleteUser(user._id).subscribe(
        (res) => {
          console.log('User deleted successfully', 'Close', { duration: 3000 });
          this.getAllUsers(); 
        },
        (err) => {
          console.log('Error deleting user', 'Close', { duration: 3000 });
        }
      );
    }
  }

}


