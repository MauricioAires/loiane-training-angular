import type { Routes } from '@angular/router';

export const CURSOS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./cursos').then((c) => c.Cursos),
  },
  {
    path: 'novo',
    loadComponent: () => import('./components/cursos-form/cursos-form').then((c) => c.CursosForm),
  },
  {
    path: 'editar/:cursoId',
    loadComponent: () => import('./components/cursos-form/cursos-form').then((c) => c.CursosForm),
  },
];
