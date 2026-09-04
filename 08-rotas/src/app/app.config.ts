import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './shared/services/auth/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), AuthService, provideRouter(routes)],
};
