import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import { MaterialModule } from '../shared/modules/material/material.module';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
