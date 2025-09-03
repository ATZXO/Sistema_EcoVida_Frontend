import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatus$ = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http:HttpClient) { }

  //generamos el token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`,loginData);
  }

  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token:any){
    localStorage.setItem('token',token);
    this.loginStatus$.next(true);
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //cerranis sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginStatus$.next(false); 
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr){
      return JSON.parse(userStr);
    }
    return null;
  }

  public getUserRole(): string{
    const user = this.getUser();
    if (user && user.authorities && user.authorities.length > 0) {
      return user.authorities[0].authority;
    }
    return '';
  }

}
