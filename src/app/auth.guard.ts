import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/pmsLogin/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {


  constructor(private loginService: LoginService, private router: Router ){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isAuth = this.loginService.isAuthenticated();
      if(!isAuth){
        this.router.navigate(['/Login']);
      }
      return isAuth;
  }
  
}
