import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  UrlTree,
  Router,
  NavigationExtras,
  CanLoad,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): UrlTree | boolean {
    console.log('AuthGuard#canActivate called');
    const url = state.url;
    console.log(url);
    console.log(this.checkLogin(url));
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): UrlTree | boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): UrlTree | boolean {
    let url = '/${route.path}';
    return this.checkLogin(url);
  }

  checkLogin(url: string): UrlTree | boolean {
    if (this.authService.isLoggedIn) {
      console.log('auth: true');
      return true;
    }
    console.log(url);

    this.authService.redirectUrl = url;

    let sessionId = 123456789;

    let navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor',
    };

    console.log('auth: true');
    return this.router.createUrlTree(['/login'], navigationExtras);
  }
}
