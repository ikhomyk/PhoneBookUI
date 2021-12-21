import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ContactsModule } from '../contacts/contact.module';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

@NgModule({
  declarations: [
    FavoriteComponent,
    FavoriteListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    PipesModule,
    ContactsModule
  ]
})
export class FavoriteModule { }
