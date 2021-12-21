import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditProfileModalWinComponent } from './components/edit-profile-modal-win/edit-profile-modal-win.component';
import { PipesModule } from './pipes/pipes.module';
import { GreetingComponent } from './components/greeting/greeting.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    EditProfileModalWinComponent,
    GreetingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  exports: [
    ChangePasswordComponent,
    EditProfileModalWinComponent,
    GreetingComponent
  ]
})
export class SharedModule { }
