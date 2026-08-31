import { EventEmitter, Injectable } from '@angular/core';
import { Log } from '../../shared/log/log';

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

  constructor(private logService: Log) {
    console.log('CursosService');
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos.');
    return this.#cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog('Criando um novo curso: ' + curso);
    this.#cursos.push(curso);

    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}

// ES6 => MODULO => JavaScript 2015
// Classes != injeção de dependências => DI
