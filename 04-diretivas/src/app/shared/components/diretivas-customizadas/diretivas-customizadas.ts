import { Component } from '@angular/core';

import { FundoAmarelo } from '../../directives/fundo-amarelo/fundo-amarelo';
import { HighlightMouse } from '../../directives/highlight-mouse/highlight-mouse';
import { Highlight } from '../../directives/highlight/highlight';
import { NgElse } from '../../directives/ng-else/ng-else';

@Component({
  selector: 'app-diretivas-customizadas',
  imports: [FundoAmarelo, HighlightMouse, Highlight, NgElse],
  templateUrl: './diretivas-customizadas.html',
  styleUrl: './diretivas-customizadas.css',
})
export class DiretivasCustomizadas {
  mostrarCursos: boolean = false;

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
