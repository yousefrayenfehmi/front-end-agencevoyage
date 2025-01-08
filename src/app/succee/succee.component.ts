import { Component } from '@angular/core';

@Component({
  selector: 'app-succee',
  standalone: true,
  imports: [],
  templateUrl: './succee.component.html',
  styleUrl: './succee.component.scss'
})
export class SucceeComponent {
  message: string = 'Félicitations! Le paiement a été effectué avec succès.';
  subMessage: string = 'Merci pour votre achat. Vous recevrez bientôt un e-mail de confirmation.';

}
