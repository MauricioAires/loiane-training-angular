import { Component, signal } from '@angular/core';
import { DataBinding } from './data-binding/data-binding';
import { MeuFormModule } from './meu-form/meu-form-module';

@Component({
  selector: 'app-root',
  imports: [DataBinding, MeuFormModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('data-binding');
}
