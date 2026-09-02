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
  {
    path: 'course/:courseId',
    loadComponent: () =>
      import('./courses/course-details/course-details').then((c) => c.CourseDetails),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./courses/not-found/not-found').then((c) => c.NotFound),
  },
];
