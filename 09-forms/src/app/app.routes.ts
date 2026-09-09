import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'template-form',
    loadComponent: () => import('./pages/template-form/template-form').then((c) => c.TemplateForm),
  },
  {
    path: 'data-form',
    loadComponent: () => import('./pages/data-form/data-form').then((c) => c.DataForm),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'template-form',
  },
  {
    path: '**',
    redirectTo: 'data-form',
  },
];
