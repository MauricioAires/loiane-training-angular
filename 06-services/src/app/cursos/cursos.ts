import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// ECMAScript 2025
import { CursosService } from './cursos.service';

@Component({
  imports: [NgFor],
  selector: 'app-cursos',
  styleUrl: './cursos.scss',
  templateUrl: './cursos.html',
})
export class Cursos implements OnInit {
  cursosService: CursosService;

  cursos: string[] = [];

  // primeiro método chamado
  constructor() {
    this.cursosService = new CursosService();
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
