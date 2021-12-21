import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthUserService } from 'src/app/shared/services/auth-user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  private readonly passwordRegex: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  signInForm: FormGroup = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", [Validators.required, this.passwordValidator.bind(this)])
  });

  errorMessage: string;

  user$!: Subject<User>;

  constructor(private router: Router,
    private readonly authService: AuthService,
    public readonly authUserService: AuthUserService) {
    this.user$ = this.authService.user$;
  }

  authenticate(): void {
    if (this.signInForm.valid) {
      this.authService.authenticate(this.signInForm.value.username, this.signInForm.value.password).pipe(take(1))
        .subscribe(res => {
          this.router.navigate(['']);
        }, err => {
          this.errorMessage = err && err.error;
        });
    } else {
      this.errorMessage = 'Please enter valid data';
    }
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this.passwordRegex.test(control.value);
      return !isValid ? { invalidPassword: true } : null;
    }
    return null;
  }
}

