import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean{
    let user = localStorage.getItem('test');
    if(user){
      return true;
    }
    else{
      this.router.navigate(['/home']);
      return false;
    }
  }
}
