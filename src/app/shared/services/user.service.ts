import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/modules/auth/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { AuthUserService } from './auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly httpClient: HttpClient,
    private readonly authService: AuthService,
    private readonly authUserService: AuthUserService) {
  }

  updateUser(firstName: string, lastName: string, email: string, status: string): Observable<User> {
    const body = {
      firstName,
      lastName,
      email,
      status
    };

    const userId = this.authUserService.authUser.id;

    return this.httpClient.put<User>(`${environment.apiUrl}user?userId=${userId}`, body).pipe(tap(user => {
      this.authService.user$.next(user);
      this.authUserService.authUser = user;
    }));
  }


  changePassword(oldpassword: string, newPassword: string, confirmPassword: string): Observable<User> {
    const params = new HttpParams().set('oldpassword', oldpassword)
      .set('newPassword', newPassword)
      .set('confirmPassword', confirmPassword);

    return this.httpClient.put<User>(`${environment.apiUrl}profile/change-password?${params.toString()}`, {})
      .pipe(tap(user => {
        this.authService.user$.next(user);
      }));
  }

}
