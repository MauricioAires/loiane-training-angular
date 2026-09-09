import type { Routes } from '@angular/router';
import { studentsDeactivateGuard } from '../shared/guards/students-deactivate/students-deactivate-guard';
import { studentDetailsResolver } from './guards/student-details-resolver/student-details-resolver';
import { studentsGuard } from '../shared/guards/students/students-guard';

/**
 * Rotas sem parâmetro vem primeiro.
 *
 *
 * Quando usar rotas filhas?
 *
 * 1. Evitar duplicação do mesmo parâmetro
 * 2. Quando quer renderizar um componente filho dentro
 * de um componente pai.
 */
export const studentsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./students').then((c) => c.Students),
    canActivateChild: [studentsGuard],
    children: [
      {
        path: 'new',
        pathMatch: 'full',
        canDeactivate: [studentsDeactivateGuard],
        loadComponent: () => import('./student-form/student-form').then((c) => c.StudentForm),
      },
      {
        path: ':studentId',
        loadComponent: () => import('./student-detail/student-detail').then((c) => c.StudentDetail),
        resolve: {
          student: studentDetailsResolver,
        },
      },
      {
        canDeactivate: [studentsDeactivateGuard],
        path: ':studentId/edit',
        loadComponent: () => import('./student-form/student-form').then((c) => c.StudentForm),
      },
    ],
  },
];
