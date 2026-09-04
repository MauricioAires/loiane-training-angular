import { EventEmitter, inject, Service, signal } from '@angular/core';

import type { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';

@Service()
export class AuthService {
  private router = inject(Router);

  private isUserAuthenticated = signal(false);

  readonly showMenuEmitter = new EventEmitter<boolean>();

  authenticate(user: IUser) {
    if (user.name === 'user@gmail.com' && user.password === '123456') {
      this.isUserAuthenticated.set(true);

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);
      return;
    }

    this.showMenuEmitter.emit(false);
    this.isUserAuthenticated.set(false);
  }

  isAuthenticated(): boolean {
    return this.isUserAuthenticated();
  }
}
