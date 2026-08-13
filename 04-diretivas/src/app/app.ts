import { Component, signal } from '@angular/core';

import { DiretivaNgif } from './shared/diretiva-ngif/diretiva-ngif';
import { DiretivaNgswitch } from './shared/diretiva-ngswitch/diretiva-ngswitch';
import { DiretivaNgfor } from './shared/diretiva-ngfor/diretiva-ngfor';
import { DiretivaNgclass } from './shared/diretiva-ngclass/diretiva-ngclass';
import { DiretivaNgstyle } from './shared/diretiva-ngstyle/diretiva-ngstyle';
import { OperadorElvis } from './shared/operador-elvis/operador-elvis';
import { ExemploNgContent } from './shared/exemplo-ng-content/exemplo-ng-content';
import { DiretivasCustomizadas } from './shared/diretivas-customizadas/diretivas-customizadas';

@Component({
  selector: 'app-root',
  imports: [
    DiretivaNgif,
    DiretivaNgswitch,
    DiretivaNgfor,
    DiretivaNgclass,
    DiretivaNgstyle,
    OperadorElvis,
    ExemploNgContent,
    DiretivasCustomizadas,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('04-diretivas');
}
