import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizeConvertion'
})
export class FileSizeConvertionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    if(value == "1GB"){
      value = 1024;
    }else if(value == "5GB"){
      return 5120;
    }
    return value;
  }

}
