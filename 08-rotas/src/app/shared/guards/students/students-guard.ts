import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

export const studentsGuard: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  // console.log(route);

  console.log('StudentsGuard: Guarda de rota filha');

  if (state.url.includes('edit')) {
    return of(true);
  }

  return true;
};

/**
 * Não entendi a diferença entre o
 * @canActivate e o @canActivateChild
 */
