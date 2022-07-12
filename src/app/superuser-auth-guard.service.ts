import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {SuperuserAuthService} from "./superuser-auth.service";

@Injectable()
export class SuperuserAuthGuardService implements CanActivate{

  constructor(private superuser : SuperuserAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.superuser.hasAccess().subscribe((access : any) => {
      if (!access) {
        this.router.navigateByUrl('profile')
      }
      return access
    })

    return this.superuser.hasAccess()

  }
}
