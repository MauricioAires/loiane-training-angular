import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  readonly #cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  emitirCursoCriado = new EventEmitter<string>();

  /**
   * Mesmo com duas instâncias essa variável vai ser compartilhada
   * entre todas, porque ela não precisa de uma
   * instância para acessar essa variável.
   *
   * para fazer um broadcast de eventos entre duas instâncias
   * de um mesmo service basta utilizar um static
   */
  static criouNovoCurso = new EventEmitter<string>();

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.#cursos;
  }

  addCurso(curso: string) {
    this.#cursos.push(curso);

    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}

// ES6 => MODULO => JavaScript 2015
// Classes != injeção de dependências => DI
