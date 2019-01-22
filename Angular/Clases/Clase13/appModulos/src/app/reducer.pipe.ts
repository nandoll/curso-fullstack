import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducer'
})
export class ReducerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
