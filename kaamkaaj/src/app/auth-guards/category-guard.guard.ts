import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceProviderProfileService } from '../Services/serviceProviderProfile/service-provider-profile.service';
import { SignInService } from '../Services/sign-in/sign-in.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryGuardGuard implements CanActivate {
  constructor(private signservice: SignInService, private router: Router, private spProfileData: ServiceProviderProfileService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.signservice.getCategory() != "Not Selected") {
      return true
    }
    else {
      this.router.navigate(["/service-provider/profile/" + this.signservice.getemail()])
      return false
    }
  }

}
