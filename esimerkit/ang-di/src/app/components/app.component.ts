import {Component } from '@angular/core';
// Root component hosts two different product components
@Component({
  selector: 'app-root',
  template: `
    <h2>Dependency Injection ja Inversion of Control</h2>
    <p>DI:n tarkoituksena on luoda "löyhä riippuvuus" kahden sovelluksen osan välille,<br />
    mikä helpottaa sovelluksen muokkaamista ja sovelluksen osien uudelleenkäyttöä.</p>
    <p>Pääkomponentin sisällä on kaksi lapsikomponenttia, product1 ja 2, jotka saavat<br />
    datansa eri serviceistä. Servicen vaihtaminen toiseen on DI:n ansiosta helpompaa.<br />
    Se on mahdollista joko komponentista tai moduulista käsin ilman että product1:n<br />
    tai 2:n luokkien koodia muutetaan.</p>
    <p>
    Jos Service vaihdetaan moduulista käsin, kyseessä on Ioc, sillä sovelluksen<br />
    kontrollointi on "käännetty/vaihdettu" komponentista moduuliin.
    </p>
    <p>Kokeile vaihtaa service alla oleviin komponentteihin. Löyhä sidonta eli<br />
    "loose coupling" tekee sen helpommaksi:</p>
    <app-product1></app-product1>
    <br>
    <app-product2></app-product2>
  `
})
export class AppComponent { }
