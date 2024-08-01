import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  displayText: string = 'Sign In';
  placeholderPass: string = '********';
  placeholderUser: string = 'Username';
  constructor() {}

  ngOnInit() {}
}
