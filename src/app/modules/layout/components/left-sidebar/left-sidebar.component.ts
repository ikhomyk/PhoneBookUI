import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileModalWinComponent } from 'src/app/shared/components/edit-profile-modal-win/edit-profile-modal-win.component';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';
import { ConfirmLogoutComponent } from 'src/app/modules/auth/components/confirm-logout/confirm-logout.component';
import { ChangePasswordComponent } from 'src/app/shared/components/change-password/change-password.component';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {
  routers = [{
    link: '/contacts',
    name: 'Contacts'
  },
  {
    link: '/favorite',
    name: 'Favorite'
  },
  {
    link: '/profile',
    name: 'Profile'
  }
  ];

  activeLink = this.routers[0];

  constructor(public dialog: MatDialog,
    public readonly authUserService: AuthUserService) { }

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalWinComponent, {
      panelClass: 'modal-window-container',
      width: '500px',
      height: '600px',
    })
  }

  confirm(): void {
    const dialogRef = this.dialog.open(ConfirmLogoutComponent, {
      panelClass: 'confirm-logout-container',
      width: '400px',
      height: '200px',
      data: {}
    });
  }

  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'modal-window-container',
      width: '500px',
      height: '600px',
    })
  }
}
