import type { Routes } from '@angular/router';

export const REACTIVE_SEARCH_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./reactive-search').then((c) => c.ReactiveSearch),
  },
];
