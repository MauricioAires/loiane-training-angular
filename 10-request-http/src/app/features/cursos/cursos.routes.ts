import type { Routes } from '@angular/router';

export const CURSOS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./cursos').then((c) => c.Cursos),
  },
];
