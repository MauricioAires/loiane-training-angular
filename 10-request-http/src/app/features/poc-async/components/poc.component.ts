import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';
import { tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc',
  template: ` <app-poc-async [nome]="nome" [valor]="valor()" estilo="bg-danger"> </app-poc-async> `,
})
export class PocComponent implements OnInit, OnDestroy {
  nome = 'Componente sem unsubscribe';
  valor = signal<string>('');

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((res) => {
        this.valor.set(res);
      });
  }

  ngOnDestroy(): void {
    console.log(`${this.nome} foi destruído 🔥`);
  }
}
