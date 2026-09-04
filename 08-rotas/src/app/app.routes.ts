import type { Routes } from '@angular/router';

import { authGuard } from './shared/guards/auth-guard/auth-guard';
import { coursesGuard } from './shared/guards/courses-guard/courses-guard';
import { studentsGuard } from './shared/guards/students/students-guard';

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
    canActivateChild: [coursesGuard],
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.routing').then((m) => m.studentsRoutes),

    canActivate: [authGuard],
    canActivateChild: [studentsGuard],
  },
];

/**
 * O @canActivate verifica a permissão de acesso a
 * rota direto no path pai por exemplo, students or courses
 * e não verifica os path posteriores
 *
 * Enquanto o @canActivateChild verifica cara filho
 */
