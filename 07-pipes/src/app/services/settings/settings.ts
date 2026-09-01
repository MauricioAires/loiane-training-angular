import { Service } from '@angular/core';

@Service()
export class Settings {
  getLocale() {
    return 'pt-BR';
  }
}
