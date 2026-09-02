import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected courseId = signal('');
}
