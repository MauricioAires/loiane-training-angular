import { Component } from '@angular/core';
import { PocUnsubComponent } from '../poc-async/components/poc-unsub.component';
import { PocAsyncComponent } from '../poc-async/components/poc-async.component';
import { PocTakeUntilComponent } from '../poc-async/components/poc-take-until.component';
import { PocTakeComponent } from '../poc-async/components/poc-take.component';
import { PocComponent } from '../poc-async/components/poc.component';

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
  mostrarComponentes = true;

  // constructor(private service: EnviarValorService) { }

  ngOnInit() {}

  emitirValor(valor: string) {}

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
