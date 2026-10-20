import { Component, OnInit } from '@angular/core';

import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc',
  template: ` <app-poc-async [nome]="nome" [valor]="valor" estilo="bg-danger"> </app-poc-async> `,
})
export class PocComponent implements OnInit {
  nome = 'Componente sem unsubscribe';
  valor!: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {}
}
