import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'busca-reativa',
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
    path: 'upload',
    loadComponent: () => import('./features/upload-file/upload-file').then((c) => c.UploadFile),
  },
  {
    path: 'busca-reativa',
    loadChildren: () =>
      import('./features/reactive-search/reactive-search.routes').then(
        (m) => m.REACTIVE_SEARCH_ROUTES,
      ),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
