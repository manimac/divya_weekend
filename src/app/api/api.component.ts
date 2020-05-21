import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'training-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  comments;
  error;

  constructor(private api: CommonService) {
    this.loadItems();
   }

  ngOnInit(): void {
  }

  loadItems(){
    this.api.httpRequest('get', 'comments').subscribe(
      (response)=>{
        this.comments = response;
        this.error = '';
      },
      (error)=>{
        this.error = error.message;
      }
    )
  }

}
