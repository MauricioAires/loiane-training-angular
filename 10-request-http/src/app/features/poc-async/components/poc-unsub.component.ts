import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';
import { Subscription, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc-unsub',
  template: `
    <app-poc-async [nome]="nome" [valor]="valor()" estilo="bg-secondary"> </app-poc-async>
  `,
})
export class PocUnsubComponent implements OnInit, OnDestroy {
  /**
   * Unsubscribe manualmente!
   */
  nome = 'Componente com unsubscribe';
  valor = signal<string>('');

  #sub: Subscription[] = [];

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    const observable = this.service
      .getValor()
      .pipe(tap((v) => console.log(this.nome, v)))
      .subscribe((res) => {
        this.valor.set(res);
      });

    this.#sub.push(observable);
  }

  ngOnDestroy(): void {
    /**
     * isso é forma imperativa de se descrever
     * é melhor trabalhar de uma forma reativa.
     */
    this.#sub.forEach((s) => {
      s.unsubscribe();
    });

    console.log(`${this.nome} foi destruído 🔥`);
  }
}
