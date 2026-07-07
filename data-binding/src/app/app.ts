import { Component } from '@angular/core';
import { DataBinding } from './data-binding/data-binding';
import { MeuFormModule } from './meu-form/meu-form-module';
import { Ciclo } from './ciclo/ciclo';

@Component({
  selector: 'app-root',
  imports: [DataBinding, MeuFormModule, Ciclo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  valor: number = 5;
  deletarCiclo: boolean = false;

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo(): void {
    this.deletarCiclo = !this.deletarCiclo;
  }
}
