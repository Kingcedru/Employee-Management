import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputFieldComponent } from '../../input-field/input-field.component';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit(loginForm: NgForm) {
    if(!this.username.value || !this.password.value) return
    this.router.navigate(['/dashboard'])
  }
}
