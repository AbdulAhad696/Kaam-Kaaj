import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from './Services/sign-in/sign-in.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private signservice:SignInService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.signservice.getdata()){
      return true;
    }
    this.router.navigate(['/signin'],{queryParams:{returnUrl:state.url}});
    return false;
      
  }
  
}
