import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'training-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitle = 'About component';
  students = [
    {
      name: 'Aravind',
      age: 26
    },
    {
      name: 'Dinesh',
      age: 23
    },
    {
      name: 'Vicky',
      age: 26
    },
    {
      name: 'Mani',
      age: 21
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
