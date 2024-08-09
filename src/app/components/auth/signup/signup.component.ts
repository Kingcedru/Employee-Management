import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputFieldComponent } from '../../input-field/input-field.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  displayText: string = 'Sign Up';
  placeholderPass: string = '********';
  placeholderUser: string = 'Username';
  inputTypes: boolean = true;
  signupForm!: NgForm;

  @ViewChild('username') username!: InputFieldComponent;
  @ViewChild('password') password!: InputFieldComponent;
  @ViewChild('repassword') repassword!: InputFieldComponent;

  constructor() {}

  ngOnInit() {}

  onSubmit(signupForm: NgForm) {
    console.log(this.username.value);
    console.log(this.password.value);
    console.log(this.repassword.value);
  }
}
