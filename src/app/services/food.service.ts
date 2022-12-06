import { Injectable } from '@angular/core';
import {products} from '../shared/models/food';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url = environment.apiURL;

  constructor(private httpClient:HttpClient) { }

  // getProduct(): Observable<products[]>{
  //   return this.httpClient.get<products[]>(this.url+'/product/get');
  // }

  getProduct(){
    return this.httpClient.get(this.url+'/product/get');
  }

  getbySearchTerm(searchTerm:string){
    console.log("chdaf")
    return this.httpClient.get(this.url+'/product/search/'+searchTerm);
  }

  getProductById(id:number){
    return this.httpClient.get(this.url+'/product/getbyID/'+id);
  }
}