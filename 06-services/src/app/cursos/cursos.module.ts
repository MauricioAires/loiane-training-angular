import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Cursos } from './cursos';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [Cursos],
  imports: [CommonModule],
  exports: [Cursos],
  // providers: [CursosService],
})
export class CursosModule {}

/**
 * PADRÃO SINGLETON
 */
