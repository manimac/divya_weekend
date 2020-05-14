import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'training-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private communication: CommunicationService) { }

  ngOnInit(): void {
  }

  callToLandingPage(){
    this.communication.homeToLandingPage.emit();
  }

}
