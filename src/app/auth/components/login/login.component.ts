import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ActionTypes } from '../../models/action-types';
import { forgotPassword, loginSuccess } from '../../store/auth-actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  // async recievePromise() {
  //   return new Promise<boolean>((resolve, reject) => {
  //     setTimeout(()=>{
  //       resolve(true);
  //     }, 2000);
  //   })
  // }
  login() {
    console.log(this.loginForm.getRawValue());
    this.store.dispatch(
      loginSuccess({
        Email: this.loginForm.get('Email').value,
        Password: this.loginForm.get('Password').value,
      })
    );
  }
  forgotPassword() {
    this.store.dispatch(forgotPassword({}));
    this.router.navigate(['forgot-password']);
  }
  register() {
    this.router.navigate(['register']);
  }
  showPassword() {
    console.log(this.loginForm.get('Password').value);
  }
}
