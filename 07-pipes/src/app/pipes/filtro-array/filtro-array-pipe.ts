import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
})
export class FiltroArrayPipe implements PipeTransform {
  transform(value: string[], args: string): string[] {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    const filter = args.toLocaleLowerCase();

    return value.filter((v) => v.toLocaleLowerCase().indexOf(filter) !== -1);
  }
}

/**
 *
 * O QUE E UM PIPE PURO? É AQUELE QUE NÃO OLHA AS
 * MODIFICAÇÕES DO VALOR QUE É PARADO COMO PARÂMETRO
 * QUALQUER VALOR PRIMITIVO OU NÃO, NÃO RESPONDE AS MUDANÇAS DO OBJETO
 */

/**
 * O QUE É UM PIPE IMPURO?
 *
 * É UM PIPE QUE ESCUTA A MUDANÇAS DO VALOR É MODIFICADO.
 */
