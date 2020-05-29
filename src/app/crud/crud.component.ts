import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'training-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  studentsForm: FormGroup;
  studentsList = [];
  currentRowIndex = null;
  constructor() { }

  ngOnInit(): void {
    this.studentsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobile: new FormControl(''),
      city: new FormControl(''),
    })
  }

  save(){
    if(this.studentsForm.valid){
      if(this.currentRowIndex || this.currentRowIndex==0){
        for(let i =0;i < this.studentsList.length;i++){
          if(i == this.currentRowIndex){
            this.studentsList[i] = this.studentsForm.value;
          }
        }
      }
      else {
        this.studentsList.push(this.studentsForm.value);
      }
      this.studentsForm.reset();
      this.currentRowIndex = null;
    }
    else{
      if(!this.studentsForm.value.name){
        alert("Please enter the name");
      }
    }
  }

  edit(student, index){
    this.studentsForm.patchValue(student);
    this.currentRowIndex = index;
  }

  delete(index){
    this.studentsList.splice(index, 1);
  }

}
