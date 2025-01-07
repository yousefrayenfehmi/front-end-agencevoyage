import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InscripComponent } from "./inscrip/inscrip.component";
import { NgIf } from '@angular/common';
import { ServiceService } from './service.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, InscripComponent, NgIf, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agence_voyage';
  token: string | null = null;  // Declare token

  constructor(private _service: ServiceService) {
    console.log("navvupdate");
  }

  ngOnInit(): void {
    this.token = this._service.getToken();
      // Store token in the declared variable
      console.log(this.token);
      
  }
  
}
