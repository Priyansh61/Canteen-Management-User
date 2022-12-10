import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  url = environment.apiURL;

  constructor(private httpClient:HttpClient,
    private route:Router) {}

  register(data:any){
    return this.httpClient.post(`${this.url}/user/signup`, data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  forgotPassword(data:any){
    return this.httpClient.post(`${this.url}/user/forgotPassword`, data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  login(data:any){
    return this.httpClient.post(`${this.url}/user/login`, data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


  isLoggedIn(){
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  changePassword(data:any){
    return this.httpClient.post(`${this.url}/user/changePassword`, data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['']);
  }

  userDetails(){
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    return decoded;
  }


}
