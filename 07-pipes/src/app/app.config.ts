import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import locatePt from '@angular/common/locales/pt';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { Settings } from './services/settings/settings';

registerLocaleData(locatePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    // {
    //   provide: LOCALE_ID, // Gera Id's único
    //   useValue: 'pt-BR',
    // },
    Settings,
    {
      provide: LOCALE_ID,
      deps: [Settings],
      useFactory: (service: Settings) => service.getLocale(),
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
