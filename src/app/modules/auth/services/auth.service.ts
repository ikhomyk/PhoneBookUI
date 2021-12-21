import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from "../models/user";
import { tap, switchMap } from 'rxjs/operators';
import { AuthUserService } from "src/app/shared/services/auth-user.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: BehaviorSubject<User> = new BehaviorSubject(null as unknown as User);

    constructor(private readonly httpClient: HttpClient,
        private readonly authUserService: AuthUserService) { }

    authenticate(userName: string, password: string): Observable<User> {
        const body = {
            userName,
            password
        };

        return this.httpClient.post<User>(`${environment.apiUrl}authenticate`, body).pipe(tap(user => {
            this.user$.next(user);
            localStorage.setItem("accessToken", user.token);
            localStorage.setItem('refreshToken', user.refreshToken);
            this.authUserService.authUser = user;
        }));
    }

    getCurrentUser(): Observable<User> {
        return this.user$.pipe(
            switchMap(user => {
                // check if we already have user data
                if (user) {
                    return of(user);
                }

                const token = localStorage.getItem('accessToken');
                // if there is token then fetch the current user
                if (token) {
                    return this.fetchCurrentUser();
                }

                return of(null);
            })
        );
    }

    fetchCurrentUser(): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}User`)
            .pipe(
                tap(user => {
                    this.user$.next(user);
                    this.authUserService.authUser = user;
                })
            );
    }

    refreshToken(): Observable<User> {
        return this.httpClient.post<User>(`${environment.apiUrl}authenticate/refresh-token`, {})
            .pipe(
                tap(response => {
                    localStorage.setItem('accessToken', response.token);
                    localStorage.setItem('refreshToken', response.refreshToken);
                })
            );
    }

    logout(): void {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this.user$.next(null);
    }
}