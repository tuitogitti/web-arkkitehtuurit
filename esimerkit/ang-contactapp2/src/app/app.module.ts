/* Tämän on koko sovelluksen päämoduuli joka sisältää
kaikki muut moduulit ja komponentit. Ne tuodaan tänne
joko automaattisesti tai käsin */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactComponent } from './contact/contact.component';
// Dekoraattori joka tekee tästä moduulin ja sisältää
// muutamia määrityksiä
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactlistComponent,
    ContactformComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    /* HttpClientInMemoryWebApiModule on feikkiserverin moduuli
       joka pitää ottaa pois käytöstä kun vaihdetaan oikeaan serveriin */
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  // servicejä ei tarvitse laittaa enää tänne jos niissä on määritys { providedIn: 'root' }
  providers: [],
  bootstrap: [AppComponent] // komponentti josta sovellus käynnistyy
})
export class AppModule { }
