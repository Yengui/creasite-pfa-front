import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReverseAuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isLoggedIn().pipe(
      take(1),
      map((loggedIn) => {
        if (loggedIn) {
          return this.router.createUrlTree(['/']);
        } else {
          return true;
        }
      })
    );
  }
}
