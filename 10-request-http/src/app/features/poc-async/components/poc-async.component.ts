import { Component, OnDestroy, OnInit } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [PocAsync, AsyncPipe],
  selector: 'app-poc-async2',
  template: `
    <app-poc-async [nome]="nome" [valor]="valor$ | async" estilo="bg-success"> </app-poc-async>
  `,
})
export class PocAsyncComponent implements OnInit, OnDestroy {
  nome = 'Componente com async';
  valor$!: Observable<string>;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.valor$ = this.service.getValor().pipe(tap((v) => console.log(this.nome, v)));
  }

  ngOnDestroy(): void {
    console.log(`${this.nome} foi destruído 🔥`);
  }
}
