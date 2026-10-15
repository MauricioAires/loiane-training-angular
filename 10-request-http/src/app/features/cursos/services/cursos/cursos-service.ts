import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import type { Curso } from '../../models/curso';

@Service()
export class CursosService {
  readonly #http = inject(HttpClient);

  readonly #API = 'http://localhost:3000/cursos';

  list() {
    return this.#http.get<Curso[]>(this.#API);
  }
}
