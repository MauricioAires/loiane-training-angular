import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cursos',
  },
  {
    path: 'cursos',
    loadChildren: () => import('./features/cursos/cursos.routes').then((m) => m.CURSOS_ROUTES),
  },
  {
    path: 'rxjs-poc',
    loadComponent: () =>
      import('./features/unsubscribe-poc/unsubscribe-poc').then((c) => c.UnsubscribePoc),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
