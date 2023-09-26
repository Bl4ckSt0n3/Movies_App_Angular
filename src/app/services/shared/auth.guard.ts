import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const token = localStorage.getItem('jwt');
  const router: Router = inject(Router);
  const jwtHelper: JwtHelperService = inject(JwtHelperService);
  
  if (token && !jwtHelper.isTokenExpired(token)) {
    //router.createUrlTree(['pages/products']); // it is a data structure that provides some utilities like Router.navigate
    return true;
  }
  return false;
};
