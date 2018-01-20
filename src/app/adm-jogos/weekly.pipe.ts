import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekly'
})
export class WeeklyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === 1 ? 'SIM' : 'NÃO';
  }

}
