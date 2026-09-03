import type { Routes } from '@angular/router';

export const coursesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./courses').then((c) => c.Courses),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found').then((c) => c.NotFound),
  },
  {
    path: ':courseId',
    loadComponent: () => import('./course-details/course-details').then((c) => c.CourseDetails),
  },
];

/**
 * Lazy loading tem 2 benefícios
 *
 * 1. Carregamento mais rápido
 * 2. Segurança, você não vai carregar o código
 * de paginas que o usuário não tem acesso.
 *
 *  Dicas de Performance: carregamento
 * sobe demanda (lazy loading)
 *
 * O primeiro ponto para fazer isso
 * é organizar a aplicação em módulos.
 */
