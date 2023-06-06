import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Users } from 'src/app/models/sys-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  jwtHelper = new JwtHelperService();

  constructor( private httpClient: HttpClient, private cookieService: CookieService ) { }

  validateCreds(uModel: Users): Observable<any> {
    const url = environment.baseUrl + '/Project/Login';

    let loginInfo: any ={
      ApiUser: uModel.ApiUser,
      ApiPass: uModel.ApiPass
    }
    console.log(url)
    return this.httpClient.post<any>(url, loginInfo).pipe(map(response => response));
  }

  setToken(jwtToken: string): void{
    if(jwtToken){
      const expires = new Date();
      expires.setMinutes(expires.getHours() + 8);
      this.cookieService.set('jwtToken', jwtToken, expires, '/',  'localhost', true, 'Strict');
    }
  }

  isAuthenticated(): boolean
  {
    var jwtToken = this.cookieService.get('jwtToken');
    if(jwtToken){
      return !this.jwtHelper.isTokenExpired(jwtToken);
    }
    return false;
  }

  removeAuth(): void{
    var jwtToken = this.cookieService.get('jwtToken');
    if(jwtToken){
      this.cookieService.delete('jwtToken');
    }
  }



}
