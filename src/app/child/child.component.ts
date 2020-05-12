import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'training-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() user;
  @Output('parentFun') parent: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(val){
    this.parent.emit({name: val});
  }

  childName = 'Vicky';

}
