/*
komponentti joka tuottaa osakkeen hinnan, tässä tapauksessa arpomalla.
ja lähettää Stock-tyyppisen olion mediaattorille
*/
import { Component, Output, EventEmitter } from '@angular/core';
import { Stock } from '../stock';

@Component({
  selector: 'app-price',
  template: `<strong><input type="button" value="Buy" (click)="buyStocks()">
               {{stockSymbol}} {{lastPrice | currency:'USD'}}</strong>
              `,
  styles: [`:host {background: pink; padding: 10px 10px 10px 10px;}`]
})
export class PriceComponent {
    /* @Output()-annotaatio kertoo paikan josta event lähetetään mediaattorille.
    buy-muuttuja on bindattu mediaattorissa (app.component.html) priceHandler($event) -metodiin.
    buy on EventEmitter joka emitoi Stock-tyyppisen -olion.
    */
  @Output()
  buy: EventEmitter<Stock> = new EventEmitter();

  stockSymbol = 'IBM';
  lastPrice: number;
  // hinnan arvonta kahden sekunnin välein on konstruktorissa
  constructor() {
    setInterval(() => {
      this.lastPrice = (80 + Math.random());
    }, 2000);
  }

  // ostometodi joka laukaistaan napista
  // ostos joka on Stock -olio emitoidaan buy -emitterillä
  buyStocks(): void {
    const stockToBuy: Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };
    this.buy.emit(stockToBuy);
  }
}
