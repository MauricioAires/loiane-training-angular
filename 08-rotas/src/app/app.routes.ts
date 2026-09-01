import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((c) => c.Home),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },
  {
    path: 'courses',
    loadComponent: () => import('./courses/courses').then((c) => c.Courses),
  },
];
