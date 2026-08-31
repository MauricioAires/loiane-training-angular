import { Service } from '@angular/core';

@Service()
export class Log {
  consoleLog(message: string) {
    console.log(message);
  }
}
