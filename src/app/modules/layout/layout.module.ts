import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material.module';

import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    LeftSidebarComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }

