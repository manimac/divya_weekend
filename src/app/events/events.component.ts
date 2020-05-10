import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(param){
    console.log(param);
  }

  changeEvent(){
    console.log('Input value changed');
  }
  
  keyPressEvent(){
    console.log('Key value changed');
  }

  focusEvent(){
    console.log('Focus input');
  }

}
