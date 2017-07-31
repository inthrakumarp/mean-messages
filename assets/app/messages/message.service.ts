import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
// rxjs is a 3rd party package used by Angular for Observables
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";
import { ErrorService } from "../errors/error.service";
import { environment } from '../../../environments/environment';

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();
    siteUrl = environment.siteUrl;
    
    constructor(private http: Http, private errorService: ErrorService) { }

    addMessage(message :Message){
        const body = JSON.stringify(message);
        // by default the content-type of a request is 'text/plain', as our /message route extects a json we'll have to set the headers
        const headers = new Headers({'Content-Type' : 'application/json'}); 
        const token = localStorage.getItem('token')
                        ? '?token=' + localStorage.getItem('token')
                        : '';
        // return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
        // return this.http.post('https://obscure-mesa-97228.herokuapp.com/message' + token, body, {headers: headers})
         return this.http.post(this.siteUrl + '/message' + token, body, {headers: headers})
            // the map() returns the response as an observable implicitly
            // .json() is used to extract the data attached to the response (Strips out the headers)
            .map((response: Response) =>  {
                const result = response.json();
                const message =  new Message(    result.obj.content, 
                                                 result.obj.user.firstName, 
                                                 result.obj._id, 
                                                 result.obj.user._id
                                            );
                this.messages.push(message);
                return message;
            } )
            // but the catch() doesn't return an obersvable, so the Obervable.throw() has to be used
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        // by default the content-type of a request is 'text/plain', as our /message route extects a json we'll have to set the headers
        const headers = new Headers({'Content-Type' : 'application/json'}); 
        const token = localStorage.getItem('token')
                        ? '?token=' + localStorage.getItem('token')
                        : '';
        // return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
        // return this.http.patch('https://obscure-mesa-97228.herokuapp.com/message/' + message.messageId + token, body, {headers: headers})
        return this.http.patch(this.siteUrl + '/message/' + message.messageId + token, body, {headers: headers})
            // the map() returns the response as an observable implicitly
            // .json() is used to extract the data attached to the response (Strips out the headers)
            .map((response: Response) =>  response.json() )
            // but the catch() doesn't return an obersvable, so the Obervable.throw() has to be used
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })
    }

    getMessage() {
        // return this.http.get('http://localhost:3000/message')
        // return this.http.get('https://obscure-mesa-97228.herokuapp.com/message')
        return this.http.get(this.siteUrl + '/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message( 
                                                            message.content, 
                                                            message.user.firstName, 
                                                            message._id, 
                                                            message.user._id
                                                        )
                                            );
                }
                // the current instance of messages should be exactly the message stored/retrieved from server.
               this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                 console.log(error);
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            })
    }

    deleteMessage(message :Message) {
        //console.log(this.messages.indexOf(message));
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token')
                        ? '?token=' + localStorage.getItem('token')
                        : '';
        // return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
        // return this.http.delete('https://obscure-mesa-97228.herokuapp.com/message/' + message.messageId + token)
        return this.http.delete(this.siteUrl + '/message/' + message.messageId + token)
            // the map() returns the response as an observable implicitly
            // .json() is used to extract the data attached to the response (Strips out the headers)
            .map((response: Response) =>  response.json() )
            // but the catch() doesn't return an obersvable, so the Obervable.throw() has to be used
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })
    }
}