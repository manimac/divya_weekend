import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputFilter'
})
export class InputFilterPipe implements PipeTransform {

  transform(arr: any, ...args: any): unknown {
    if(!arr || !args || !(args[0])){
      return arr;
    }
    return arr.filter(element=>(element.name.toLowerCase()).indexOf(args[0].toLowerCase())!=-1);
  }

}
