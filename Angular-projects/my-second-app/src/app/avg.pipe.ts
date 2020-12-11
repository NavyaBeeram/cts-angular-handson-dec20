import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avg'
})
export class AvgPipe implements PipeTransform {

  transform(value: number,args: any){
    if(args >= 70)
      return 'First class';
    else if(args>=35 && args<70)
      return 'Pass';
    else
      return 'Fail';
  }

}
