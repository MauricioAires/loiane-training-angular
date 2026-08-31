import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// ECMAScript 2025
import { CursosService } from './cursos.service';

/**
 * Services são declarados dentro de providers.
 */
@Component({
  providers: [CursosService],
  selector: 'app-cursos',
  styleUrl: './cursos.scss',
  templateUrl: './cursos.html',
  standalone: false,
})
export class Cursos implements OnInit {
  // cursosService: CursosService;

  cursos!: string[];

  // primeiro método chamado
  constructor(private cursosService: CursosService) {
    // this.cursosService = _cursosService;
    // this.cursosService = new CursosService();
  }

  ngOnInit(): void {
    /**
     * é similar a se escrever em um cana no YouTube
     *
     * Observable é do EcamScript 2015 e não do TypeScript
     */
    CursosService.criouNovoCurso.subscribe((curso) => {
      this.cursos.push(curso);
    });

    this.#getCursos();
  }
  #getCursos() {
    this.cursos = this.cursosService.getCursos();
  }
}
