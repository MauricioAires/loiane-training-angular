import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

export const studentsGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  // console.log(route);

  if (state.url.includes('edit')) {
    return of(true);
  }

  return true;
};

/**
 * Não entendi a diferença entre o
 * @canActivate e o @canActivateChild
 */
