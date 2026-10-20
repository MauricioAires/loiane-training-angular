import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc-take-until',
  template: ` <app-poc-async [nome]="nome" [valor]="valor" estilo="bg-primary"> </app-poc-async> `,
})
export class PocTakeUntilComponent implements OnInit {
  nome = 'Componente com takeUntil';
  valor!: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {}
}
