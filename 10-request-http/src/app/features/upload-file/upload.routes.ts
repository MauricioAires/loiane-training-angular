import type { Routes } from '@angular/router';

export const UPLOAD_FILE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./upload-file').then((c) => c.UploadFile),
  },
];
