import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }

  getValue(){
    return "Service called from custom service";
  }
}
