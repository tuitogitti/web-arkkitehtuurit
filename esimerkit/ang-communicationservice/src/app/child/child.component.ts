import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-child',
    templateUrl: 'child.component.html',
    styles: [`.child { background-color: #CFD8DC;}`]
})

export class ChildComponent {
// injektoidaan messageservice
    constructor(private messageService: MessageService) {}

    sendMessage(): void {
        // Välitetään viesti observerille ChildComponentiin
        this.messageService.MessageFromChild('Viesti ChildComponentilta AppComponentille!');
    }

    clearMessage(): void {
        // Tyhjennetään viestin lähetys
        this.messageService.clearMessage();
    }
}

