import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import type { Curso } from '../../models/curso';
import { environment } from '../../../../../environments/environment';
import { delay, take } from 'rxjs';

@Service()
export class CursosService {
  readonly #http = inject(HttpClient);

  readonly #API = `${environment.apiUrl}/cursos`;

  list() {
    return this.#http.get<Curso[]>(this.#API).pipe(delay(500));
  }

  loadById(cursoId: string) {
    return this.#http.get<Curso>(`${this.#API}/${cursoId}`).pipe(take(1));
  }

  #create(curso: Curso) {
    return this.#http.post(this.#API, curso).pipe(take(1));
  }

  #update(curso: Curso) {
    return this.#http.put(`${this.#API}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso: Curso) {
    if (curso.id) {
      return this.#update(curso);
    }

    return this.#create(curso);
  }

  remove(cursoId: string) {
    /**
     * Eu tivesse idea de adicionar um take no service em quanto
     * eu ainda trabalhava na Brisanet e agora Loiane está utilizando
     * o mesmo padrão.
     */
    return this.#http.delete(`${this.#API}/${cursoId}`).pipe(take(1));
  }
}
