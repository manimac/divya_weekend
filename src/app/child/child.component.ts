import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../communication.service';


@Component({
  selector: 'training-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() user;
  @Output('parentFun') parent: EventEmitter<any>= new EventEmitter();

  constructor(private communication: CommunicationService) { }

  ngOnInit(): void {
  }

  save(val){
    this.parent.emit({name: val});
  }

  childName = 'Vicky';

  childToCommon(){
    this.communication.childToCommon.emit('Child component');
  }

}
