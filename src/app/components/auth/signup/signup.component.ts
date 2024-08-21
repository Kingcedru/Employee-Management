import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(signupForm: NgForm) {
    if (!this.username.value || !this.password.value) return;
    this.router.navigate(['/dashboard']);
  }
}
