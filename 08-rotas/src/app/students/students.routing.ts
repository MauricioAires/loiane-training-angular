import type { Routes } from '@angular/router';

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
    path: 'students',
    loadComponent: () => import('./students').then((c) => c.Students),
    children: [
      {
        path: 'new',
        loadComponent: () => import('./student-form/student-form').then((c) => c.StudentForm),
      },
      {
        path: ':id',
        loadComponent: () => import('./student-detail/student-detail').then((c) => c.StudentDetail),
      },
      {
        path: ':id/edit',
        loadComponent: () => import('./student-form/student-form').then((c) => c.StudentForm),
      },
    ],
  },
];
