import { Component, signal } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CoursesService } from './shared/services/courses/courses';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  providers: [CoursesService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected courseId = signal('');
}
