import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'training-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  staffName = 'test';

  studentsForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.studentsForm = new FormGroup({
      name: new FormControl('test', [Validators.required]),
      email: new FormControl('', [Validators.minLength(6)]),
      mobile: new FormControl('')
    })
  }

  SaveLocalReference(val){
    console.log(val)
  }

  SaveNgModel(){
    console.log(this.staffName);
  }

  SaveTemplateDriven(param){
    console.log(param)
  }

  SaveReactiveForm(){
    console.log(this.studentsForm.value);
    console.log(this.studentsForm.valid);
  }

  clear(){
    this.studentsForm.reset();
  }

  resetTemplate(param){
    console.log(param);
    param.value.useremail = '';
  }

  resetNgModel(){
    this.staffName = '';
  }

}
