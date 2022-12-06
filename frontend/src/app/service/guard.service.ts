import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()

export class GuardService implements CanActivate{

  constructor(private authService :AuthService ,private router :Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.IsAuthenticated()) {
      return true
    }else{
      this.router.navigate(['/'])
      return false
    }
  }
}