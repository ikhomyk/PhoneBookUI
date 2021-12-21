import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthService } from "src/app/modules/auth/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService,
    private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.getCurrentUser().pipe(
      map(user => !!user),
      tap(isLogged => {
        if (!isLogged) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }
}