import type { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import type { IStudent } from '../../../shared/interfaces/student';
import { inject } from '@angular/core';
import { StudentsService } from '../../../shared/services/students/students';

export const studentDetailsResolver: ResolveFn<IStudent | null> = (
  route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot,
) => {
  const studentsService = inject(StudentsService);

  console.log('StudentDetailResolver');

  const studentId = Number(route.params['studentId']);

  if (Number.isNaN(studentId) || studentId < 1) return null;

  return studentsService.getStudent(studentId);
};
