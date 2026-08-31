import { NgModule } from '@angular/core';
import { CriarCurso } from './criar-curso';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { CursosService } from '../cursos/cursos.service';
import { ReceberCursoCriado } from '../receber-curso-criado/receber-curso-criado';

@NgModule({
  declarations: [CriarCurso, ReceberCursoCriado],
  imports: [CommonModule],
  exports: [CommonModule, CriarCurso],
  // providers: [CursosService],
})
export class CriarCursoModule {}
