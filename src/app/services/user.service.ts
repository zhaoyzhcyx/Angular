import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UserService {
    uri = 'http://localhost:3000/user';
    public currentUser = {
        'username': '',
        'email': ''
    };

    constructor(private http: HttpClient) {
    }

    checkUser(username,password) {
        return this.http.get(`${this.uri}/read/${username}`)
    }

    addUser(username,email,password) {
        let newUser = [{
            username: username,
            email: email,
            password: password
        }]
        return this.http.post(`${this.uri}/create`,newUser)
    }
}