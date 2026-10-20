import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc-async2',
  template: ` <app-poc-async [nome]="nome" [valor]="valor" estilo="bg-success"> </app-poc-async> `,
})
export class PocAsyncComponent implements OnInit {
  nome = 'Componente com async';
  valor!: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {}
}
