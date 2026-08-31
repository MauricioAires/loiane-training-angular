import { Component } from '@angular/core';
import { ExemplosPipes } from './exemplos-pipes/exemplos-pipes';

@Component({
  selector: 'app-root',
  imports: [ExemplosPipes],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
