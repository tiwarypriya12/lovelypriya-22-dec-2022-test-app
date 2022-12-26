import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteServiceService } from './route-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {

  constructor(private router: Router, private routeService: RouteServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.routeService.messageObservable$.subscribe((data) => {
      if (data === true) return true;
    });
    this.router.navigate(['/login']);
    return false;;
  }
  
}
