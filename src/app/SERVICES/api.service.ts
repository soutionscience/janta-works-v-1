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
  searchOne = (route, resource): Observable<any>=>{
    return this.restangular.all(route, resource).getList()
  }
  getSpecificResource(apiRoute, id): Observable<any[]>{
    return this.restangular.one(apiRoute,id).getList()
  }
  getVerySpecificResource(apiRoute, resourceName, id): Observable<any[]>{
    return this.restangular.one(apiRoute, resourceName).all(id).getList()
  }
}
