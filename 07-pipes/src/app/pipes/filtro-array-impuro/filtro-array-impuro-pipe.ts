import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from '../filtro-array/filtro-array-pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false,
  /**
   *
   * PRATICAMENTE EM NENHUM CASO REAL VALE
   * A PENA USAR UM PIPE IMPURO, O ÚNICO CASO
   * QUE EU REALMENTE ACHEI VALIDO FOI O DE PERMISSÕES
   * GLOBAIS.
   */
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {}
