import { Component, signal } from '@angular/core';
import { DataBinding } from './data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('data-binding');
}
