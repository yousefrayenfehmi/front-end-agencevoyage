import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
    selector: 'app-passwordreset',
    imports: [FormsModule],
    templateUrl: './passwordreset.component.html',
    styleUrl: './passwordreset.component.scss'
})
export class PasswordresetComponent {
  invaliform=''
    user={
        email:''
    }

    send(){
      if(this.user.email){
        console.log(this.user.email);
        
            this.shared.requestPasswordReset(this.user.email).subscribe(
              Response=>{console.log(Response.error)},
              err=>{console.log(err.text)}
            )
      }
      else{
         this.invaliform='Please fill all required fields'
      }
    }
    constructor(public shared:ServiceService){}
}
