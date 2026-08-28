import { Component } from '@angular/core';

import { FundoAmarelo } from '../../directives/fundo-amarelo/fundo-amarelo';
import { HighlightMouse } from '../../directives/highlight-mouse/highlight-mouse';
import { Highlight } from '../../directives/highlight/highlight';

@Component({
  selector: 'app-diretivas-customizadas',
  imports: [FundoAmarelo, HighlightMouse, Highlight],
  templateUrl: './diretivas-customizadas.html',
  styleUrl: './diretivas-customizadas.css',
})
export class DiretivasCustomizadas {}
