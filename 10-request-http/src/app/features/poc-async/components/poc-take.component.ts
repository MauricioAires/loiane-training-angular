import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc-take',
  template: ` <app-poc-async [nome]="nome" [valor]="valor" estilo="bg-info"> </app-poc-async> `,
})
export class PocTakeComponent implements OnInit {
  nome = 'Componente com take';
  valor!: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {}
}
