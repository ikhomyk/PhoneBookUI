import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { SignInComponent } from './modules/auth/components/sign-in/sign-in.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { FavoriteComponent } from './modules/favorite/favorite.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full',
      },
      {
        path: 'contacts',
        component: ContactsComponent,

      },
      {
        path: 'favorite',
        component: FavoriteComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
