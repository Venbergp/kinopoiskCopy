import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SuperuserAuthService } from './superuser-auth.service';

@Injectable()
export class SuperuserAuthGuardService implements CanLoad, CanActivate {
  constructor(
    private superuser: SuperuserAuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let access: boolean = this.superuser.hasAccess();

    if (!access) {
      return this.router.parseUrl('/profile');
    }
    return access;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let access: boolean = this.superuser.hasAccess();
    if (!access) {
      return this.router.parseUrl('/profile');
    }
    return access;
  }
}
