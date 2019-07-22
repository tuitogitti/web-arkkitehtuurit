// importataan tarvittavat kirjastot
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

import { Contact } from '../contact';
// import { mockcontacts } from '../mock-contacts';
/*
@Component -dekoraattori eli annotaatio tekee luokasta
komponentin ja antaa sille olion sisällä pari määritystä
*/
@Component({
  selector: 'app-contactlist', // komponentin tagin nimi
  templateUrl: './contactlist.component.html', // polku komponentin templaattiosaan
  styleUrls: ['./contactlist.component.css'] // polku komponentin omaan css:ään
})
// komponentin luokkaosa eli TS-luokka
// toteuttaa OnInit -rajapinnan josta metodi ngOnInit
export class ContactlistComponent implements OnInit {

 // otetaan mockcontacts komponenttiin sisään
 // contacts = mockcontacts;

 contacts: Contact[];
 // Service otetaan käyttöön komponentin konstruktorin argumenttina (Dependency injection)
  constructor(private contactService: ContactService) {
   // kontaktien haku voi olla myös konstruktorissa
    /* this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts); */
  }

  // tilataan subscribe-metodilla observable servicen getContacts -metodista
  // subscriben argumenttina on callback jolla kontaktitaulukko saadaan
  _getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    this._getContacts(); // suoritetaan aina kun komponentti otetaan käyttöön
  }

}
