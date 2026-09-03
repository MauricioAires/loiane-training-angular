import type { Routes } from '@angular/router';

export const coursesRoutes: Routes = [
  {
    path: 'courses',
    loadComponent: () => import('./courses').then((c) => c.Courses),
  },
  {
    path: 'course/:courseId',
    loadComponent: () => import('./course-details/course-details').then((c) => c.CourseDetails),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found').then((c) => c.NotFound),
  },
];
