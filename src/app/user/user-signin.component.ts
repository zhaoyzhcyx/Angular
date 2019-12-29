import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../services/user.service'

@Component({
    selector: 'app-usersignin',
    templateUrl: './user-signin.component.html'
})

export class UserSignInComponent {
    userForm: FormGroup

    constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { 
        this.createForm();
    }

    createForm() {
        this.userForm = this.fb.group({
            username: '',
            pwresult: ''
        })
    }
    
    checkUser(username,password) {
        this.userService.checkUser(username,password).subscribe((data) => {
            if (data.length == 0) {

            }else {
                
                this.router.navigate([`/userset/${username}`]);
            }
        })
    }
}