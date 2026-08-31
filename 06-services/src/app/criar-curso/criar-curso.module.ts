import { NgModule } from '@angular/core';
import { CriarCurso } from './criar-curso';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { CursosService } from '../cursos/cursos.service';

@NgModule({
  declarations: [CriarCurso],
  imports: [CommonModule],
  exports: [CommonModule, CriarCurso],
  providers: [CursosService],
})
export class CriarCursoModule {}
