import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileModalWinComponent } from 'src/app/shared/components/edit-profile-modal-win/edit-profile-modal-win.component';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  constructor(
    public dialog: MatDialog,
    public readonly authUserService: AuthUserService) { }

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalWinComponent, {
      panelClass: 'modal-window-container',
      width: '500px',
      height: '600px',
    })
  }
}
