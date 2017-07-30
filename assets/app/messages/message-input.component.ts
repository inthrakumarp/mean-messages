import { Component, OnInit } from "@angular/core";

import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit{
     message: Message;

    constructor(private messageService :MessageService) { }

onSubmit(form: NgForm) {
    if(this.message){
        //Edit
        this.message.content = form.controls.content.value;
        this.messageService.updateMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
        this.message = null;
    } else {
        //Create
        const message = new Message(form.controls.content.value, 'Inthra');
        this.messageService.addMessage(message)
        // the subscribe() takes 3 aruguments, all 3 are callback functions
        // 1st function is called whenever there is a sucessful response
        //2nd function is called whenever there is a error
        // 3rd - complete function is called when the obesrvable is complet - this differs from 1st as an observable can have multiple responses
        .subscribe(
            data => console.log(data),
            error => console.log(error)
        )
    // console.log(this.messageService.getMessage());
    // console.log(form);
    }
    
    form.resetForm();
    
}

ngOnInit() {
    this.messageService.messageIsEdit.subscribe(
        (message: Message) => this.message = message
    );
}

onClear(form: NgForm) {
    form.resetForm();
    this.message = null;
}

}