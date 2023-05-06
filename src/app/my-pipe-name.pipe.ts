import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipeName',
})
export class MyPipeNamePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      const words = value.split(' ');
      if (words.length > 0) {
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      }
      return words.join(' ');
    }
    return value;
  }
}
