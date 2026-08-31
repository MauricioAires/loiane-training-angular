import { Component } from '@angular/core';

import { Cursos } from './cursos/cursos';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';
import { Log } from '../shared/log/log';

@Component({
  selector: 'app-root',
  imports: [CursosModule, CriarCursoModule],
  // providers: [CursosService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
