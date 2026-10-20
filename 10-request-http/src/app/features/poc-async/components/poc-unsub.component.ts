import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc-unsub',
  template: `
    <app-poc-async [nome]="nome" [valor]="valor" estilo="bg-secondary"> </app-poc-async>
  `,
})
export class PocUnsubComponent implements OnInit {
  nome = 'Componente com unsubscribe';
  valor!: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {}
}
