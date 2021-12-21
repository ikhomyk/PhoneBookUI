import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ContactsModule } from '../contacts/contact.module';
import { UserProfileComponent } from './user-profile.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    PipesModule,
    ContactsModule
  ],
  exports: [
    EditProfileComponent
  ]
})
export class UserProfileModule { }
