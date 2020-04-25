import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private restangular: Restangular) { }

  
  postResource(route, resouce): Observable<any>{
    return this.restangular.all(route).post(resouce)
  }
   getResource = (route): Observable<any>=>{
    return this.restangular.all(route).getList()
  }
}
