import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  styleUrl: './criar-curso.scss',
  templateUrl: './criar-curso.html',
  standalone: false,
  // providers: [CursosService],
})
export class CriarCurso implements OnInit {
  cursos: string[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  protected onAddCurso(curso: string) {
    this.cursosService.addCurso(curso);
  }
}
