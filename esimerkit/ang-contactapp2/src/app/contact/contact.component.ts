import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // otetaan ContactlistComponentista c-muuttuja sisään
  @Input() c: Contact;

  constructor() { }

  ngOnInit() {
  }

}
