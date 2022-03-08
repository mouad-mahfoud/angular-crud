import { JwtService } from './../services/jwt.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private jwtService: JwtService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.jwtService.getRolesFromToken());

    if (
      this.jwtService
        .getRolesFromToken()
        .some((el) => el.authority === route.data['role'])
    ) {
      return true;
    }

    this.router.navigateByUrl('/403');
    return false;
  }
}
