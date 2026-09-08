import type { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import type { StudentForm } from '../../../students/student-form/student-form';

/**
 * Esse é um formato mais especializado, esse tipo
 * de funcionalidade pode ser feita de uma forma
 * mais genérica para que possa ser utilizado em todos
 * os componentes.
 */
export const studentsDeactivateGuard: CanDeactivateFn<StudentForm> = (
  component: StudentForm,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return component.canGoOutside() ? component.canGoOutside() : true;
};

/**
 *  O guard @CanDeactivate é utilizado para verificar
 * se o usuário pode sair dá página bastante utilizando
 * em telas de cadastro ou de edição, mas com base na minha experiencia
 * pode ser útil em telas de processamento de arquivos.
 */
