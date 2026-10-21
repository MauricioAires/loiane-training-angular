import { Component, OnInit, signal } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';
import { take, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc-take',
  template: ` <app-poc-async [nome]="nome" [valor]="valor()" estilo="bg-info"> </app-poc-async> `,
})
export class PocTakeComponent implements OnInit {
  nome = 'Componente com take';
  valor = signal<string>('');

  constructor(private service: EnviarValorService) {}

  /**
   * Ajax Simples,apenas um take resolve
   */
  ngOnInit() {
    this.service
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        take(1),
      )
      .subscribe((res) => {
        this.valor.set(res);
      });
  }

  ngOnDestroy(): void {
    console.log(`${this.nome} foi destruído 🔥`);
  }
}

/**
 * POC => Proof of concept
 */
