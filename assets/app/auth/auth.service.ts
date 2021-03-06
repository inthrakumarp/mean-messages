import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; 
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from './user.model';
import { ErrorService } from '../errors/error.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    siteUrl = environment.siteUrl;
    
    constructor(private http: Http, private errorService: ErrorService) {}

    signUp(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        // return this.http.post('http://localhost:3000/user', body, {headers: headers})
        return this.http.post('https://obscure-mesa-97228.herokuapp.com/user', body, {headers: headers})
        // return this.http.post(this.siteUrl + '/user', body, {headers: headers})
            .map((response: Response) => response.json())    
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })
    }

    signIn(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-type': 'application/json'});
        // return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
        return this.http.post('https://obscure-mesa-97228.herokuapp.com/user/signin', body, {headers: headers})
        // return this.http.post(this.siteUrl + '/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())    
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            })
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}