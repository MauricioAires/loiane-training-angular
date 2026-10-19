import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import type { Curso } from '../../models/curso';
import { environment } from '../../../../../environments/environment';
import { delay } from 'rxjs';

@Service()
export class CursosService {
  readonly #http = inject(HttpClient);

  readonly #API = `${environment.apiUrl}/cursos`;

  list() {
    return this.#http.get<Curso[]>(this.#API).pipe(delay(2 * 1000));
  }
}
