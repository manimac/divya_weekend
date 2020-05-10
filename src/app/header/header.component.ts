import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'training-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {
    console.log(this.router.url);
    // let self = this;
    // setTimeout(function(){
    //   console.log(self.router.url);
    // },1000)
  }

  ngOnInit(): void {
  }

}
