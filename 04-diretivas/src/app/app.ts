import { Component, signal } from '@angular/core';
import { DiretivaNgif } from './shared/diretiva-ngif/diretiva-ngif';
import { DiretivaNgswitch } from './shared/diretiva-ngswitch/diretiva-ngswitch';

@Component({
  selector: 'app-root',
  imports: [DiretivaNgif, DiretivaNgswitch],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('04-diretivas');
}
