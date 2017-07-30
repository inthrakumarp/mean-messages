import { Component, OnInit } from "@angular/core";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
             <app-message 
                            [message]="msg" 
                            *ngFor="let msg of messages"></app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService :MessageService ) { }
    
    ngOnInit(){
        this.messageService.getMessage()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                })
    }

}