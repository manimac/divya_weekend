import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[trainingCustom]'
})
export class CustomDirective {

  @Input() trainingCustom;
  constructor() { }

  @HostBinding('style.background') border;
  @HostListener('mouseover') test1(){
    this.border = 'red';
  }

  @HostListener('mouseout') test2(){
    if(this.trainingCustom == 'test'){
      this.border = 'green';
    }    
  }
}
