import { Component, signal } from '@angular/core';

import { DiretivaNgif } from './shared/components/diretiva-ngif/diretiva-ngif';
import { DiretivaNgswitch } from './shared/components/diretiva-ngswitch/diretiva-ngswitch';
import { DiretivaNgfor } from './shared/components/diretiva-ngfor/diretiva-ngfor';
import { DiretivaNgclass } from './shared/components/diretiva-ngclass/diretiva-ngclass';
import { DiretivaNgstyle } from './shared/components/diretiva-ngstyle/diretiva-ngstyle';
import { OperadorElvis } from './shared/components/operador-elvis/operador-elvis';
import { ExemploNgContent } from './shared/components/exemplo-ng-content/exemplo-ng-content';
import { DiretivasCustomizadas } from './shared/components/diretivas-customizadas/diretivas-customizadas';

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
