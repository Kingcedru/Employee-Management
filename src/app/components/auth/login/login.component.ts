import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputFieldComponent } from '../../input-field/input-field.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  displayText: string = 'Sign In';
  placeholderPass: string = '********';
  placeholderUser: string = 'Username';
  inputTypes: boolean = true;

  @ViewChild('username') username!: InputFieldComponent;
  @ViewChild('password') password!: InputFieldComponent;

  loginForm!: NgForm;

  constructor() {}

  ngOnInit() {}

  onSubmit(loginForm: NgForm) {
    console.log(this.username.value, this.password.value);
  }
}
