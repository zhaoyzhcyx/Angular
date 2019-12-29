import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-userset',
    templateUrl: './user-set.component.html'
})

export class UserSetComponent implements OnInit {

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let userName = params['username']
            if (typeof userName == 'undefined') {
                this.userService.currentUser.username = ''
            }else if (userName == 'signout') {
                this.userService.currentUser.username = ''
                this.router.navigate(['signin'])
            }else {
                this.userService.currentUser.username = userName
                this.router.navigate(['event'])
            }
        });
    }

}