import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile-modal-win',
  templateUrl: './edit-profile-modal-win.component.html',
  styleUrls: ['./edit-profile-modal-win.component.scss']
})
export class EditProfileModalWinComponent {
  errorMessage: string;

  profileForm: FormGroup = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.email]),
    "status": new FormControl("")
  });

  constructor(
    public dialogRef: MatDialogRef<EditProfileModalWinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public readonly userService: UserService,
    public readonly authUserService: AuthUserService,
    private readonly router: Router) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  updateUser(): void {
    if (this.profileForm.valid) {
      this.userService.updateUser(this.profileForm.value.firstName, this.profileForm.value.lastName,
        this.profileForm.value.email, this.profileForm.value.status)
        .pipe(take(1)).subscribe(res => {
          this.router.navigate(['']);
          this.dialogRef.close();
        }, err => {
          this.errorMessage = err && err.error;
        });
    } else {
      this.errorMessage = 'Please enter valid data';
    }
  }

}
