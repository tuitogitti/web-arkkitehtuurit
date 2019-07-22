/* komponentti joka ottaa vastaan Stock-tyyppisen datan joka tulee mediaattorilta
ja ilmoittaa että ostomääräys on tehty*/
import {Component, Input} from '@angular/core';
import {Stock} from '../stock';

@Component({
    selector: 'app-order',
    template: `{{message}}`,
    styles: [`:host {background: lightBlue; padding: 10px 10px 10px 10px}`]
})
export class OrderComponent {

    message = 'Waiting for the orders...';
// stock -muuttujan edessä on viiva jotta se eroaisi setterin ja getterin nimistä
    private _stock: Stock;
/* @Input()-annotaatio kertoo paikan jonne mediaattorilta saatu data vastaanotetaan.
   Tässä otetaan vastaan Stock -tyyppinen value.*/
    @Input()
    set stock(value: Stock ) {
        // console.log(this._stock); // undefined, koska ei ole vielä saanut arvoa
        // this._stock = value; // value voitaisiin ottaa vastaan myös omaan _stock -muuttujaan
        if (value && value.bidPrice !== undefined) {
            this.message = `Placed order to buy 100 shares
                          of ${value.stockSymbol} at \$${value.bidPrice.toFixed(2)}`;
        }
    }
// Getteri tarvitaan setterin pariksi vaikka sitä ei käytettäisikään
    get stock(): Stock {
        return this._stock;
    }
}

