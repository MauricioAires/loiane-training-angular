import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth/auth';
import { CoursesService } from './shared/services/courses/courses';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  providers: [CoursesService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected showMenu = signal(false);
  protected courseId = signal('');

  private destroyRef = inject(DestroyRef);

  constructor(private authService: AuthService) {
    this.authService.showMenuEmitter
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.showMenu.set(state);
      });
  }
}
