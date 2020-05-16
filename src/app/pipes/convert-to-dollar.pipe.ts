import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDollar'
})
export class ConvertToDollarPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value;
  }

}

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
