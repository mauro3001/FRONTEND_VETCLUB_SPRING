import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/auth/token"

  loginForm(form:Login): Observable<Login>{
    return this.http.post<Login>(this.url,form)
  }

  //Iniciamos sesion y declaramos el token en el localStorega
  public loginUser(token: any){
    localStorage.setItem('token', token);
  }                                                                                                                

  public isLogged(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //cerramos sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(username: any){
    localStorage.setItem('username', JSON.stringify(username));
  }

  public getUser(){
    let userStr = localStorage.getItem('username');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
}
