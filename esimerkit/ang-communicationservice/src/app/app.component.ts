import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: [`.app { background-color: #C0C0C0; }`]
})

export class AppComponent {
    message: any; // viesti tulee tähän

    constructor(private messageService: MessageService) {
        // Tilataan observable eli tarkkailtava ja otetaan viesti talteen callbackilla
       this.messageService.MessageToApp().subscribe(message => this.message = message );
    }
}
