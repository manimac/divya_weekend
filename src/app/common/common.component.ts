import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'training-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor(private communication: CommunicationService) { 
    this.communication.childToCommon.subscribe((response)=>{
      this.testCommon(response);
    })
  }

  ngOnInit(): void {
  }

  testCommon(param){
    alert("Common component clicked"+ param);
  }

}
