import { Component, OnInit, AfterViewInit } from '@angular/core';

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
  
  constructor() { 
    this.username = 'Aravind';
    let self = this;
    setTimeout(function(){
      self.styleProp.background = 'brown';
    },1000)
  }

  ngOnInit(): void {
    //Loading when the component initiate
  }

  ngAfterViewInit(){
    //After loading the html content
  }

}
