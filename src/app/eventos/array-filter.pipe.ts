import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args.length === 0) {
      return value;
    }
    return value.filter(x => x.date.match(new RegExp('' + args, 'i')));
  }

}
