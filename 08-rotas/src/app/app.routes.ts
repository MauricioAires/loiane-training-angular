import type { Routes } from '@angular/router';

import { authGuard } from './shared/guards/auth-guard/auth-guard';
import { coursesGuard } from './shared/guards/courses-guard/courses-guard';
import { authCanMatchGuard } from './shared/guards/auth-can-match-guard/auth-can-match-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((c) => c.Home),
    canActivate: [authGuard],
    canMatch: [authCanMatchGuard],
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
    canMatch: [authCanMatchGuard],
    canActivate: [authGuard],
  },
];

/**
 * O @canActivate verifica a permissão de acesso a
 * rota direto no path pai por exemplo, students or courses
 * e não verifica os path posteriores
 *
 * Enquanto o @canActivateChild verifica cara filho
 */

/**
 * Semp
 */
