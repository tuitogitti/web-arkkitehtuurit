/* Service on Angular-sovelluksen rakenneosa jonka tarkoituksena on tarjota
palveluita muille rakenneosille, yleensä komponenteille. Tämä
service välittää dataa palvelimelta Angular-sovellukseen ja toisinpäin.
*/
// HttpClient tarvitaan asynkroniseen datan hakemiseen serveriltä ja lähettämiseen serverille
// HttpClientModule pitää lisäksi muistaa importata päämoduuliin
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';
/* Palvelimelta haettu data toimitetaan komponentille observablena
   Angular on reaktiivinen sovelluskehys joka käyttää observableja
   datan siirtämiseen paikasta toiseen. */
import { Observable } from 'rxjs';

/* injectable annotaatio kertoo että service voidaan injektoida komponenttiin.
 providedIn: 'root' argumenttina tekee servicestä providerin ja serviceä ei tarvitse
enää lisätä root-moduulin (app.module.ts) providers -taulukkoon */
@Injectable({
  providedIn: 'root'
})
export class ContactService {

   apiurl = 'api/contacts'; // valepalvelimen eli in-memory-apin osoite
  // apiurl = 'http://localhost:3000/contacts'; // oikean palvelimen osoite

  // tarvitaan määrittämään lähetysmuoto kun lähetetään dataa serverille
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // HttpClient -olio tuodaan konstruktorissa serviceen
  constructor(private http: HttpClient) { }

  /* getContacts() palauttaa Observablen.
  HttpClient -olion get-metodilla haetaan Observable
  annetusta osoitteesta. Observablen tyyppi on taulukko jossa on
  Contact -tyyppisiä olioita.

  Observable on "tarkkailtava" eli olio joka 'pushaa' datastreamia.
  Vastaanottaja tilaa 'streamin'.
  */
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiurl);
    // Voi tulla myös virhe kun haetaan dataa serveriltä
    // tehdään myöhemmin tähän virheenkäsittely
  }

  // lähetetään http:n post-metodilla uusi kontakti serverille
  postContactToServer(newcontact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiurl, newcontact, this.httpOptions);
    // ilmoitus lähetyksen onnistumisesta ja virheenkäsittely tähän
  }
}
