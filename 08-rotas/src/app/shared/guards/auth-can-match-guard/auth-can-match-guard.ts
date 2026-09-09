import type { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth/auth';
import { inject } from '@angular/core';

export const authCanMatchGuard: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  // const router = inject(Router);

  console.log('CanMatch: verificando se o usuário pode carregar o código do modulo.');

  if (authService.isAuthenticated()) {
    return true;
  }

  return true;
};

/** FUNCIONAL GUARD */
