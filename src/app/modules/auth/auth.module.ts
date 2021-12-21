import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { ConfirmLogoutComponent } from './components/confirm-logout/confirm-logout.component';

@NgModule({
  declarations: [
    SignInComponent,
    ConfirmLogoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SignInComponent,
  ],
  providers: [
  ]
})
export class AuthModule { }
