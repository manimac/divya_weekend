import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  childToCommon: EventEmitter<any>= new EventEmitter();
  homeToLandingPage: EventEmitter<any>= new EventEmitter();
  constructor() { }
}
