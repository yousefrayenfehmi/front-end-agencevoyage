import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
    selector: 'app-newpssword',
    imports: [FormsModule, NgIf],
    templateUrl: './newpssword.component.html',
    styleUrl: './newpssword.component.scss'
})
export class NewpsswordComponent {
  invalidform=''
  validpassword=true
  user={
    token:  '',
    mot_de_passe:''
  }
  send(){
    if(this.user.mot_de_passe){
      console.log(this.user);
    }
    else{
      this.invalidform='Please fill all required fields'
      this.validpassword=true
    }
  }
  presskey(){
    if (this.validatePassword(this.user.mot_de_passe)) {
      this.validpassword=true
    } else {
      this.validpassword=false
    }
  }
     validatePassword(password:any) {
      const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    
      return regex.test(password);
    }
    ngOnInit(): void {
      this.user.token = this.route.snapshot.paramMap.get('token') || '';
    }

    constructor(private route: ActivatedRoute,public shared:ServiceService){}
}

