import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateBR } from '../../models/state-br.model';
import { Position } from '../../models/position.mode';

@Injectable({
  providedIn: 'root',
  // o providedIn foi adicionado no Angular v6
})
export class DropdownService {
  readonly #http = inject(HttpClient);

  fetchStates() {
    return this.#http.get<StateBR[]>('data/statesBR.json');
  }

  /**
   * Gosto de usar get para buscar um objeto
   *
   * e fetch para buscar listas.
   *
   */

  fetchPositions(): Position[] {
    return [
      {
        name: 'Dev',
        level: 'Junior',
        description: 'Dev Junior',
      },
      {
        name: 'Dev',
        level: 'Mid-leve',
        description: 'Dev Mid-level',
      },
      {
        name: 'Dev',
        level: 'Senior',
        description: 'Dev Senior',
      },
    ];
  }
}

/**
 * Não é boa prática ter uma chamada HTTP diretamente
 * no componente.
 *
 * Deve ficar no serviço.
 *
 * No componente deve conter
 */
