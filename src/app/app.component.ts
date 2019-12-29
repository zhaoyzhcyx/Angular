import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my angular test-app';

  constructor(private userService: UserService) { }
}
