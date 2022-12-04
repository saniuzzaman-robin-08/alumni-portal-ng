import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlumniSnackbarService } from '../../../shared/services/alumni-snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _router: Router,
    private _alumniSnackbarService: AlumniSnackbarService
  ) {}

  ngOnInit(): void {
    this.initRegistrationForm();
  }
  initRegistrationForm() {
    this.registrationForm = this._formBuilder.group({
      Email: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmedPassword: ['', Validators.required],
    });
    this.registrationForm.addValidators(
      this.createCompareValidator(
        this.registrationForm.get('Password'),
        this.registrationForm.get('ConfirmedPassword')
      )
    );
  }
  createCompareValidator(
    controlOne: AbstractControl,
    controlTwo: AbstractControl
  ) {
    return () => {
      if (controlOne.value !== controlTwo.value)
        return { match_error: 'Value does not match' };
      return null;
    };
  }
  register() {
    if (this.registrationForm.valid) {
      this._alumniSnackbarService.openSnackbar(
        'success',
        'You are succcessfully registered, please wait until BE is ready.. :)'
      );
    }
    console.log(this.registrationForm);
  }
  showPassword(event: Event, passwordInput: HTMLInputElement) {
    passwordInput.type = passwordInput.type === 'text' ? 'password' : 'text';
    event.stopPropagation();
  }
  login() {
    this._router.navigate(['login']);
  }
}
