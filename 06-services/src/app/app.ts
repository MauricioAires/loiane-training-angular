import { Component } from '@angular/core';

import { Cursos } from './cursos/cursos';

@Component({
  selector: 'app-root',
  imports: [Cursos],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
