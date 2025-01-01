import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { NewpsswordComponent } from './newpssword/newpssword.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './admin-users/Administration_du_système_réservation/administration/administration.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'inscrip',component:InscripComponent},
    {path:'reset',component:PasswordresetComponent},
    {path:'profil',component:ProfilComponent},
    {path:'reset-password/:token',component:NewpsswordComponent},
    { path: 'admin/users', component: AdminUsersComponent },
    {path:'admin/admis',component:AdministrationComponent},
    {path:'',component:HomeComponent}

];
