import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { SignInService } from '../Services/sign-in/sign-in.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
import { ServiceProviderProfileService } from '../Services/serviceProviderProfile/service-provider-profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private signservice: SignInService, private router: Router, private spProfileData: ServiceProviderProfileService) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.signservice.getusertype() == "Worker" && this.signservice.getCategory() != "Not Selected") {
      return true;
    }
    else if (this.signservice.getusertype() == "Worker" && this.signservice.getCategory() == "Not Selected") {
      // this.router.navigate([`service-provider/profile/${this.signservice.getemail()}`]);
      return true;
    }

    this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
