import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date();
    return value.filter(x => date.getTime() < new Date(this.replaceDateFormat(x.date)).getTime());
  }

  replaceDateFormat(date: string) {
    const returnDate = date.substring(3, 5) + '/' + date.substring(0, 2) + '/' + date.substring(6, 10) + ' ' + date.substring(11);
    return returnDate;
  }

}
