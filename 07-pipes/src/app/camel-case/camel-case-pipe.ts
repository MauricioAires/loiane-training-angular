import { Pipe, PipeTransform } from '@angular/core';

/**
 * @Pipe decorator
 */
@Pipe({
  name: 'camelCase', // name - template
})
export class CamelCasePipe implements PipeTransform {
  /**
   *
   * @param value valor a ser transformado
   * @param args argumentos
   * @returns
   */
  transform(value: string): string {
    const values = value.split(' ');

    let result = '';

    for (const v of values) {
      result += `${this.capitalize(v)} `;
    }

    return result;
  }

  private capitalize(value: string) {
    return value.substring(0, 1).toUpperCase() + value.substring(1).toLocaleLowerCase();
  }
}
