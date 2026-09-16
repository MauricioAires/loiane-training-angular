import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateBR } from '../../models/state-br.model';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  readonly #http = inject(HttpClient);

  fetchStates() {
    return this.#http.get<StateBR[]>('data/statesBR.json');
  }
}
