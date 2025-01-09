import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paypal',
  standalone: true,
  imports: [],
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss'] 
})
export class PaypalComponent {
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
constructor(private ratour:Router){}
  ngOnInit() {
    const reserve = history.state.reserve;
    console.log(reserve);
    
    window.paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        const action = 'some action'; 
        
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: reserve.prix, 
              currency_code: 'USD'
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log('Paiement réussi', details);
          alert('Paiement réussi pour ' + details.payer.name.given_name);
          this.ratour.navigate(['/sucee'],{state:{reserve:reserve,name:details.payer.name.given_name}})
        });
      },
      onError: (err: any) => {
        console.error('Erreur lors du paiement', err);
        alert('Une erreur est survenue lors du paiement');
      },
      style: { // Corrected style object
        layout: 'horizontal', // Corrected typo 'horizantale' to 'horizontal'
        color: 'blue',
        shape: 'rect', // Corrected typo 'rec' to 'rect'
        label: 'paypal'
      }
    }).render(this.paymentRef.nativeElement);
  }
}
