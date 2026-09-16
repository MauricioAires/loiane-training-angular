import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';

/**
 * Na versão v6 do Angular foi adiciona
 * o providedIn root com esse momando tornou se
 * desnecessário importar o serviço em um módulo
 *
 * Em qual versão foi removido o módulo?
 */
/**
 * Tree-shaking in Angular is a build-optimization
 * technique that removes unused code from
 * your final bundle, making your application smaller and faster.To make a service tree-shakable, you should configure its @Injectable decorator using the providedIn property instead of declaring it in a module's providers array.
 */
/**
 * Ser tree-shakable significa que um pedaço
 *  de código (como uma função, classe ou serviço)
 * foi escrito de uma forma que o sistema de build
 * consegue detectar se ele está sendo realmente usado
 *  ou não. Se não estiver sendo usado, ele é removido
 * automaticamente do arquivo final que vai para o
 * navegador do usuário.O termo vem de uma metáfora
 * visual: imagine o seu código como uma árvore.As
 * folhas verdes são o código que seu aplicativo
 * realmente usa.As folhas marrons e mortas são
 *  o código que está lá, mas ninguém chama.
 * Tree-shaking (sacudir a árvore) é o ato de
 * chacoalhar essa árvore para que as folhas mortas
 *  caiam no chão, deixando apenas o que é estritamente
 * necessário.
 */
@Injectable({
  providedIn: 'root',
})
export class CepService {
  private http = inject(HttpClient);

  getCEP(cep: string) {
    cep = cep.replace(/\D/g, '');

    if (cep === '') return of({});

    const cepRegex = /^[0-9]{8}$/;

    if (!cepRegex.test(cep)) return of({});

    return this.http.get(`//viacep.com.br/ws/${cep}/json`);
  }
}
