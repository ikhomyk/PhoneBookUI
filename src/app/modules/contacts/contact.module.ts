import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactListComponent,
    AddContactComponent,
    UpdateContactComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SharedModule
  ],
})
export class ContactsModule { } 