import { AlumniSnackbarService } from './../../../shared/services/alumni-snackbar.service';
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
  validUser: {
    Email: 'saniuzzamanrobin07@gmail.com';
    Password: '1qazZAQ!';
  };
  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _router: Router,
    private _alumniSnackbarService: AlumniSnackbarService
  ) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
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
    const value = this.loginForm.getRawValue();
    this._store.dispatch(
      loginSuccess({
        Email: this.loginForm.get('Email').value,
        Password: this.loginForm.get('Password').value,
      })
    );
    if (value === this.validUser) {
      this._router.navigate(['alumnis']);
    } else {
      this._alumniSnackbarService.openSnackbar(
        'error',
        'Wrong email or password!'
      );
    }
  }
  forgotPassword() {
    this._store.dispatch(forgotPassword({}));
    this._router.navigate(['forgot-password']);
  }
  register() {
    this._router.navigate(['register']);
  }
  showPassword(event: Event, passwordInput: HTMLInputElement) {
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
    event.stopPropagation();
  }
}
