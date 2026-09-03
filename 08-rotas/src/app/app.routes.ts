import type { Routes } from '@angular/router';

import { coursesRoutes } from './courses/courses.routing';
import { studentsRoutes } from './students/students.routing';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((c) => c.Home),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },

  ...coursesRoutes,
  ...studentsRoutes,
];
