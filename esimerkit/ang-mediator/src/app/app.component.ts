/*Mediaattori on komponentti joka välittää dataa sen sisällä olevien lapsikomponenttien
välillä. Mediator-patternin idea on se että lapsikomponentit ovat riippumattomia
toisistaan (löyhä sidonta) ja mediator huolehtii datan välityksestä.
*/
import { Component } from '@angular/core';
import {Stock} from './stock';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  stock: Stock;

  priceHandler(event: Stock) {
      this.stock = event;
  }
}
