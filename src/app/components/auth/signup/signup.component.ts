import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  displayText: string = 'Sign Up';
  placeholderPass: string = '********';
  placeholderUser: string = 'Username';
  inputTypes: boolean = true;

  constructor() {}

  ngOnInit() {}
}
