import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store'
import { loginSuccess} from '../../store/auth-actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }
  login() {
    console.log(this.loginForm.getRawValue());
    this.store.dispatch(loginSuccess({
      Email: this.loginForm.get('Email').value,
      Password: this.loginForm.get('Password').value
    }))
  }

}
