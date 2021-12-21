import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/modules/material.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AuthGuard } from './core/guards/auth.guard';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AuthService } from './modules/auth/services/auth.service';
import { SharedModule } from './shared/shared.module';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { ContactsModule } from './modules/contacts/contact.module';
import { FavoriteModule } from './modules/favorite/favorite.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    LayoutModule,
    ContactsModule,
    UserProfileModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    FavoriteModule,
    ContactsModule
  ],

  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
