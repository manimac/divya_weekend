import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'training-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent, {static:true}) child;

  username = 'Rajkumar';

  childUserName;
  constructor() { }

  ngOnInit(): void {
    this.childUserName = this.child.childName;
  }

  parentFunction(val){
    console.log(val);
  }

}
