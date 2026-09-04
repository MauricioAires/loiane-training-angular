import type { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth-guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((c) => c.Home),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },

  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.routing').then((m) => m.coursesRoutes),
    canActivate: [authGuard],
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.routing').then((m) => m.studentsRoutes),
    canActivate: [authGuard],
  },
];
