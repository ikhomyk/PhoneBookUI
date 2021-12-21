import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { AuthUserService } from '../../services/auth-user.service';
import { UserService } from '../../services/user.service';
import { EditProfileModalWinComponent } from '../edit-profile-modal-win/edit-profile-modal-win.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  private readonly passwordRegex: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  passwordForm: FormGroup = new FormGroup({
    "oldPassword": new FormControl("", [Validators.required, this.passwordValidator.bind(this)]),
    "newPassword": new FormControl("", [Validators.required, this.passwordValidator.bind(this)]),
    "confirmPassword": new FormControl("", [Validators.required, this.passwordValidator.bind(this)]),
  });

  constructor(
    public dialogRef: MatDialogRef<EditProfileModalWinComponent>,
    public readonly userService: UserService,
    public readonly authUserService: AuthUserService) { }

  close(): void {
    this.dialogRef.close();
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this.passwordRegex.test(control.value);
      return !isValid ? { invalidPassword: true } : null;
    }

    return null;
  }

  changePassword(): void {
    if (this.passwordForm.valid) {
      this.userService.changePassword(this.passwordForm.value.oldPassword,
        this.passwordForm.value.newPassword,
        this.passwordForm.value.confirmPassword).pipe(take(1)).subscribe(res => {
          this.dialogRef.close();
        }, err => {
          alert(err && err.error);
        });
    }
  }
}

