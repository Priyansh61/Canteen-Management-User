import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  checktoken(data:any){
    return this.httpClient.get(`${this.url}/user/checkToken`, data
    );
  }

  loggedIn(){
    if(localStorage.getItem('token')){
      this.checktoken(localStorage.getItem('token')).subscribe((response:any)=>{
        if(response.status===200){
          console.log(response);
          return true;
        }
        else{
          localStorage.removeItem('token');
          return false;
        }
    },(error:any)=>{
      localStorage.removeItem('token');
      console.log(error);
      return false;
    });
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

  isAuth(){
    return localStorage.getItem('token');
  }
}
