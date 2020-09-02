import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    console.log('AuthGuard#canActivate called');
    const url = state.url;
    console.log(url);
    console.log(this.checkLogin(url));
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }
    console.log(url);

    this.authService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }
}
