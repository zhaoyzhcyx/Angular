import { Component, OnInit } from '@angular/core'
import { UserService } from '../services/user.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-usersignup',
    templateUrl: './user-signup.component.html'
})

export class UserSignUpComponent {
    userForm: FormGroup

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 
        this.createForm();
    }

    createForm() {
        this.userForm = this.fb.group({
            username: '',
            email: '',
            pwresult: '',
        })
    }
    
    addUser(username,email,password) {
        this.userService.addUser(username,email,password).subscribe((data) => {
            if (data[0].result == 'ok') {
                this.router.navigate(['/']);
            }
        })
    }
}