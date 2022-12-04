import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AlumniSnackbarService } from '../../../shared/services/alumni-snackbar.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _router: Router,
    private _alumniSnackbarService: AlumniSnackbarService
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this._formBuilder.group({
      Email: ['', [Validators.required]],
    });
  }
  resetPassword() {
    if (this.resetPasswordForm.valid && this.resetPasswordForm.get('Email').value) {
      this._alumniSnackbarService.openSnackbar(
        'success',
        `If an account with that email exist, you'll recieve a reset password link!`
      );
      this._router.navigate(['login']);
    } else {
      this.resetPasswordForm.markAllAsTouched();
      this._alumniSnackbarService.openSnackbar(
        'error',
        `Please enter a valid mail`
      );
    }
  }
  login() {
    this._router.navigate(['login']);
  }
}
