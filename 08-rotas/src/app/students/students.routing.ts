import type { Routes } from '@angular/router';
import { studentsDeactivateGuard } from '../shared/guards/students-deactivate/students-deactivate-guard';

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
    children: [
      {
        path: 'new',
        canDeactivate: [studentsDeactivateGuard],
        loadComponent: () => import('./student-form/student-form').then((c) => c.StudentForm),
      },
      {
        path: ':studentId',
        loadComponent: () => import('./student-detail/student-detail').then((c) => c.StudentDetail),
      },
      {
        canDeactivate: [studentsDeactivateGuard],
        path: ':studentId/edit',
        loadComponent: () => import('./student-form/student-form').then((c) => c.StudentForm),
      },
    ],
  },
];
