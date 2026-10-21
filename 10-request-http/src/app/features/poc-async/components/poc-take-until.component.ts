import { Component, OnInit, signal } from '@angular/core';
import { EnviarValorService } from './enviar-valor.service';
import { PocAsync } from '../poc-async';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [PocAsync],
  selector: 'app-poc-take-until',
  template: `
    <app-poc-async [nome]="nome" [valor]="valor()" estilo="bg-primary"> </app-poc-async>
  `,
})
export class PocTakeUntilComponent implements OnInit {
  nome = 'Componente com takeUntil';
  valor = signal<string>('');

  unsubscribe$ = new Subject();

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service
      .getValor()
      .pipe(
        tap((v) => console.log(this.nome, v)),
        takeUntil(this.unsubscribe$),
      )
      .subscribe((res) => {
        this.valor.set(res);
      });
  }

  ngOnDestroy(): void {
    /**
     * Fica vivo durante todo o ciclo do componente
     */
    this.unsubscribe$.next(0);
    this.unsubscribe$.complete();

    console.log(`${this.nome} foi destruído 🔥`);
  }
}
