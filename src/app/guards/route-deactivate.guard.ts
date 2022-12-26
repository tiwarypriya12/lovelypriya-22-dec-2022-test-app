import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from '../components/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root',
})
export class RouteDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: SignUpComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(currentRoute);
    console.log(currentState);
    return component.canExit();
  }
}
