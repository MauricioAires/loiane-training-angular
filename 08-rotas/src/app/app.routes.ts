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
    loadChildren: () => import('./courses/courses.routing').then((m) => m.coursesRoutes),
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.routing').then((m) => m.studentsRoutes),
  },
];
