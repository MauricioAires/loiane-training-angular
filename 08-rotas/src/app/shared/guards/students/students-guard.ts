import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { of, timeout } from 'rxjs';

export const studentsGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  console.log(route);

  if (state.url.includes('edit')) {
    return of(false);
  }

  return true;
};

/**
 * Não entendi a diferença entre o
 * @canActivate e o @canActivateChild
 */
