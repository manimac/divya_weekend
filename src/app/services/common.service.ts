import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseurl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  httpRequest(method, url, params=null){
    if(method == 'post'){
      return this.http.post(this.baseurl + url,params);
    }
    else if(method == 'get'){
      return this.http.get(this.baseurl + url);
    }
  }
}
