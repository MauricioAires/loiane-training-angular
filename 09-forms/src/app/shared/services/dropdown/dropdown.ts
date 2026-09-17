import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateBR } from '../../models/state-br.model';
import { Position } from '../../models/position.mode';
import { NewsLetter } from '../../models/news-letter.model';
import { Technologies } from '../../models/technologies.model';

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
        name: 'Dev 1',
        level: 'Junior',
        description: 'Dev Junior',
      },
      {
        name: 'Dev 2',
        level: 'Mid-leve',
        description: 'Dev Mid-level',
      },
      {
        name: 'Dev 3',
        level: 'Senior',
        description: 'Dev Senior',
      },
    ];
  }

  fetchTechnologies(): Technologies[] {
    return [
      {
        name: 'java',
        description: 'Java',
      },
      {
        name: 'javascript',
        description: 'JavaScript',
      },
      {
        name: 'php',
        description: 'PHP',
      },
      {
        name: 'ruby',
        description: 'Ruby',
      },
    ];
  }

  fetchNewsletter(): NewsLetter[] {
    return [
      {
        description: 'Sim',
        value: 's',
      },
      {
        description: 'Não',
        value: 'n',
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
