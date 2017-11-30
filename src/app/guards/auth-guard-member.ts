import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuardMember implements CanActivate {

  constructor( private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.isUsuarioAutenticado()) {
      if (this.authService.acessLevel() > 0) {
        return true;
      }else {
        this.router.navigate(['/waiting-accept']);
        return false;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }

}
