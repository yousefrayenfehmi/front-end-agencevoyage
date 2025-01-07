import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-inscrip',
    imports: [FormsModule, NgIf, HttpClientModule],
    templateUrl: './inscrip.component.html',
    styleUrl: './inscrip.component.scss'
})



export class InscripComponent {
  validPassword=true
  Validform=''
  verificationCode = ''; 
  code = '';
  verificationSent = false; 

  user={
    nom:'',
    email:'',
    mot_de_passe:'',
    date_naissance:'',
    telephone:'',
    adresse:''
  }
  constructor(private _service: ServiceService, private router: Router) {}

  submit(){
    
        if(this.validPassword==true){
          console.log(this.validPassword);

          if(this.user.nom && this.user.email && this.user.mot_de_passe && this.user.date_naissance && this.user.telephone && this.user.adresse  )
                {this._service.resgester(this.user).subscribe(
                    response=>{
                      this.code=response.code
                      this.verificationSent=true
                    },
                    err=>{console.log(err)}
                )
            }else{
            
            
            this.Validform='Please fill all required fields'
        }
                
          }
          
      
  }
presskey(){
  if (this.validatePassword(this.user.mot_de_passe)) {
    this.validPassword=true
  } else {
    this.validPassword=false
  }
}
   validatePassword(password:any) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
  
    return regex.test(password);
  }
  confimerRegister(){

    if(this.code==this.verificationCode){
      this._service.resgesterConfirme(this.user).subscribe(
        response=>{console.log(response)
          this.Validform='Compte Created'
          
          this.router.navigate(['/login']);

           alert('Compte Created');

          
          
        },
        err=>{console.log(err)}
    )

    }

  }
  signupgmail(){
    window.location.href='http://localhost:3000/api/auth/google'
    
  }

  
}
