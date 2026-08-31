import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  getCursos() {
    return ['Angular 2', 'Java', 'Phonegap'];
  }
}

// ES6 => MODULO => JavaScript 2015
// Classes != injeção de denpendencias => DI
