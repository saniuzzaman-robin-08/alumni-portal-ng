import { AlumniSnackbarComponent } from './../components/alumni-snackbar/alumni-snackbar.component';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlumniSnackbarService {
  alumniSnackbarConfig: MatSnackBarConfig;
  constructor(private _snackBar: MatSnackBar) {
    this.alumniSnackbarConfig = {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    };
  }
  openSnackbar(snackbarType: string, message: string) {
    this.alumniSnackbarConfig.data = {
      message: message,
      snackbarType:
        snackbarType === 'error' ? 'error-snackbar' : 'success-snackbar',
    };
    this._snackBar.openFromComponent(
      AlumniSnackbarComponent,
      this.alumniSnackbarConfig
    );
  }
}
