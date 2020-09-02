import { Injectable } from '@angular/core';
import { CrisisService } from './crisis.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { Crisis } from './crisis';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Crisis> | Observable<never> {
    let id = +route.paramMap.get('id');

    return this.cs.getCrisis(id).pipe(
      take(1),
      mergeMap((crisis) => {
        if (crisis) {
          return of(crisis);
        } else {
          this.router.navigate(['/crisis-center']);
        }
      })
    );
  }
}
