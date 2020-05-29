import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { CustomService } from '../services/custom.service';

@Component({
  selector: 'training-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serviceText;
  price1 = 100;
  price2 = 200;
  price3 = 300;
  imagePath = ['assets/logo.png','assets/logo1.png'];
  constructor(private communication: CommunicationService, private custom: CustomService) { 
    this.serviceText = this.custom.getValue();
  }

  ngOnInit(): void {
  }

  callToLandingPage(){
    this.communication.homeToLandingPage.emit();
  }

}
