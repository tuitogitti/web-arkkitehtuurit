import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router'; // tarvitaan navigateToList() -metodia varten

import { Contact } from '../contact';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  contacts: Contact[]; // komponentin oma kontaktitaulukko

  constructor(private contactService: ContactService, private router: Router) {
    // pitää hakea kontaktit tähänkin komponenttiin jos halutaan saada id selville
    this.contactService.getContacts().
      subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
  }

  // kontakti serverille
  onSubmit(formData) {
    console.log(formData);
    this.contactService.postContactToServer({
      'id': this.contacts.length + 1,
      'name': formData.name,
      'email': formData.email
      // subscribe välttämätön jotta servicen metodi suoritetaan
    }).subscribe(/*contact => { // näin saataisiin kontakti heti tämän komponentin taulukkoon
      this.contacts.push(contact);
    }*/);
  }

  navigateToList() {
    this.router.navigate(['/']);
  }

}
