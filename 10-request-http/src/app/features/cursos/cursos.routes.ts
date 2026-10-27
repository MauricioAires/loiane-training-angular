import type { Routes } from '@angular/router';
import { cursoGuard } from './guards/curso-resolver/curso-guard';

export const CURSOS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./cursos').then((c) => c.Cursos),
  },
  {
    path: 'novo',
    loadComponent: () => import('./components/cursos-form/cursos-form').then((c) => c.CursosForm),
    resolve: {
      curso: cursoGuard,
    },
  },
  {
    path: 'editar/:cursoId',
    loadComponent: () => import('./components/cursos-form/cursos-form').then((c) => c.CursosForm),
    resolve: {
      curso: cursoGuard,
    },
  },
];
