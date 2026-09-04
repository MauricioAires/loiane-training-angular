import { Component, signal } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth';
import { IUser } from '../shared/interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  protected user = signal<IUser>({} as IUser);

  constructor(private authService: AuthService) {}

  protected handleSignIn(): void {
    this.authService.authenticate(this.user());
  }
}

/**
 * Linguagem Fortemente tipada!
 */
