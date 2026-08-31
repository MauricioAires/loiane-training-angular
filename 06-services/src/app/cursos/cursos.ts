import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// ECMAScript 2025
import { CursosService } from './cursos.service';

/**
 * Services são declarados dentro de providers.
 */
@Component({
  // providers: [CursosService],
  selector: 'app-cursos',
  styleUrl: './cursos.scss',
  templateUrl: './cursos.html',
  standalone: false,
})
export class Cursos implements OnInit {
  // cursosService: CursosService;

  cursos: string[] = [];

  // primeiro método chamado
  constructor(private cursosService: CursosService) {
    // this.cursosService = _cursosService;
    // this.cursosService = new CursosService();
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
