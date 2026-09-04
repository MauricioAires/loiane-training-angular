import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CoursesService } from './shared/services/courses/courses';
import { AuthService } from './shared/services/auth/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  providers: [CoursesService, AuthService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected showMenu = signal(false);
  protected courseId = signal('');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe((state) => {
      this.showMenu.set(state);
    });
  }
}
