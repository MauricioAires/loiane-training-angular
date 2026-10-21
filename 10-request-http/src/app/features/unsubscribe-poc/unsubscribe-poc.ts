import { Component, inject } from '@angular/core';
import { PocUnsubComponent } from '../poc-async/components/poc-unsub.component';
import { PocAsyncComponent } from '../poc-async/components/poc-async.component';
import { PocTakeUntilComponent } from '../poc-async/components/poc-take-until.component';
import { PocTakeComponent } from '../poc-async/components/poc-take.component';
import { PocComponent } from '../poc-async/components/poc.component';
import { EnviarValorService } from '../poc-async/components/enviar-valor.service';

@Component({
  imports: [
    PocUnsubComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocComponent,
  ],
  standalone: true,
  selector: 'app-unsubscribe-poc',
  styleUrl: './unsubscribe-poc.scss',
  templateUrl: './unsubscribe-poc.html',
})
export class UnsubscribePoc {
  readonly #service = inject(EnviarValorService);

  protected mostrarComponentes = true;

  protected emitirValor(valor: string): void {
    this.#service.emitirValor(valor);
  }

  protected destruirComponentes(): void {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
