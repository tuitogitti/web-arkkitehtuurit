import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/*
Service joka hoitelee reaktiivista viestien välitystä komponenttien välillä
*/

@Injectable({
  /* metadata-olio, servicestä tehdään tässä root-tason service,
  jolloin sitä ei tarvitse laittaa moduuliin provideriksi */
  providedIn: 'root'
})
export class MessageService {
/* Subject -olio voi toimia sekä observablena että observerina
https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/subjects.html */
    private subject = new Subject<any>();

// subject toimii observerina eli tarkkailijana joka tarkkailee
// viestin tuloa ja kun viesti tulee, se vastaanotetaan ChildComponentista tänne
    MessageFromChild(message: string) {
        this.subject.next({ text: message });
    }
// subject toimii observerina ja koska next:llä ei ole parametria viesti tyhjenee
    clearMessage() {
        this.subject.next();
    }
// palauttaa subjectin observablena eli tarkkailtavana jonka AppComponent ottaa vastaan
    MessageToApp(): Observable<any> {
        return this.subject.asObservable();
    }
}

