import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-siz: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-siz: 12px;
            width: 19%;
        }
    `]
    
})

export class MessageComponent{
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}
    
    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        //console.log(this.message);
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    msgBelongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
}
