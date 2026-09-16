import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateBR } from '../../models/state-br.model';

@Injectable({
  providedIn: 'root',
  // o providedIn foi adicionado no Angular v6
})
export class DropdownService {
  readonly #http = inject(HttpClient);

  fetchStates() {
    return this.#http.get<StateBR[]>('data/statesBR.json');
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
