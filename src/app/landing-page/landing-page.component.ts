import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  username: string = '<h1><b>Dinesh</b></h1>';
  user = {
    name: 'Raj',
    age: 28
  }

  employees = [
    {
      name: 'Raj',
      age: 28
    },
    {
      name: 'Dinesh',
      age: 29
    },
    {
      name: 'Vicky',
      age: 30
    }
  ]

  showDiv = false;

  showClass = false;

  styleProp = {
    background: 'blue',
    fontSize: '28px'
  }

  isLoggedIn = true;
  
  constructor(private communication: CommunicationService) { 
    this.username = 'Aravind';
    let self = this;
    setTimeout(function(){
      self.styleProp.background = 'brown';
    },1000)
    this.communication.homeToLandingPage.subscribe((response)=>{
      this.callfromHome();
    })
  }

  ngOnInit(): void {
    //Loading when the component initiate
  }

  ngAfterViewInit(){
    //After loading the html content
  }

  callfromHome(){
    alert("Component called from Home");
  }

}
