import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import  { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor (private authService: AuthService) {}
    onSubmit() {
         // console.log(this.myForm);
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
         );
        this.authService.signUp(user)
            .subscribe(
              data => console.log(data),
              err => console.log(err)  
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required ),
            lastName: new FormControl(null, Validators.required ),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
             ] ),
            password: new FormControl(null, Validators.required )
        })
    }
}