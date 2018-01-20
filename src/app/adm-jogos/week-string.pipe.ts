import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekString'
})
export class WeekStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value) {
      case 1: return 'Segunda-feira';
      case 2: return 'Terça-feira';
      case 3: return 'Quarta-feira';
      case 4: return 'Quinta-feira';
      case 5: return 'Sexta-feira';
      case 6: return 'Sábado';
      case 7: return 'Domingo';
      default: return 'Sem reset';
    }
  }

}
