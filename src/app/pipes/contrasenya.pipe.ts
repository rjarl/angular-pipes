import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenya'
})
export class ContrasenyaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): string {
    if (activar) {
      return '*'.repeat(value.length);
    }
    return value;
  }

}
