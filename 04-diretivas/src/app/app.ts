import { Component, signal } from '@angular/core';
import { DiretivaNgif } from './shared/diretiva-ngif/diretiva-ngif';

@Component({
  selector: 'app-root',
  imports: [DiretivaNgif],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('04-diretivas');
}
