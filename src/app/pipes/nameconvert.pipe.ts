import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameconvert'
})
export class NameconvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,3);
  }

}
