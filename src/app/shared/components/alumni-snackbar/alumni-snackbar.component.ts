import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alumni-snackbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumni-snackbar.component.html',
  styleUrls: ['./alumni-snackbar.component.scss'],
})
export class AlumniSnackbarComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}

  ngOnInit(): void {}
}
