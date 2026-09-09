import type { Routes } from '@angular/router';

import { authGuard } from './shared/guards/auth-guard/auth-guard';
import { coursesGuard } from './shared/guards/courses-guard/courses-guard';
import { authCanMatchGuard } from './shared/guards/auth-can-match-guard/auth-can-match-guard';

export const routes: Routes = [
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
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((c) => c.Home),
    canActivate: [authGuard],
    canMatch: [authCanMatchGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    /**
     * pathMatch ler mais sobre isso
     * ler mais sobre redirecionamento.
     * o prefix é para rotas filhas
     */
    redirectTo: '/home',
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then((c) => c.NotFound),
  },
];

/**
 * Outra dita é configurar uma rota padrão ou uma rota
 * de direcionamento
 */

/**
 * O @canActivate verifica a permissão de acesso a
 * rota direto no path pai por exemplo, students or courses
 * e não verifica os path posteriores
 *
 * Enquanto o @canActivateChild verifica cara filho
 */

/**
 * Posso colocar tanto um componente de not-found
 * como criar um guard canActive para direcionar para
 * a rota de login.
 */

/**
 * Não ter a # é padrão de roteamento do HTML5
 *
 * O container não aceite esse tipo de link
 *
 * Por isso o angular oferece a opção de adicionar um
 * # não URL.
 */
