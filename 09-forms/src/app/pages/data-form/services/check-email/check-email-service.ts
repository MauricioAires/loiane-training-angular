import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs';
import { ICheckEmail } from '../../models/check-email.model';

/**
 * a partir da versão angular 6 não é mais necessário
 * adicionar o serviço no modulo basta apenas injetar.
 * Na parte de providers porque o próprio angular faz esse
 * trabalho.
 */
@Injectable({
  providedIn: 'root',
})
export class CheckEmailService {
  readonly #http = inject(HttpClient);

  public checkEmail(email: string) {
    return this.#http.get<ICheckEmail>('data/emails.json').pipe(
      delay(1000 * 3),
      map((dados) => dados.emails),
      map((res) => res.filter((value) => value.email === email)),
      map((res) => res.length > 0),
    );
  }
}
