import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CamelCasePipe } from '../pipes/camel-case/camel-case-pipe';
import { FiltroArrayPipe } from '../pipes/filtro-array/filtro-array-pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from '../pipes/filtro-array-impuro/filtro-array-impuro-pipe';

@Component({
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    LowerCasePipe,
    CamelCasePipe,
    FiltroArrayPipe,
    FormsModule,
    FiltroArrayImpuroPipe,
  ],
  selector: 'app-exemplos-pipes',
  styleUrl: './exemplos-pipes.scss',
  templateUrl: './exemplos-pipes.html',
})
export class ExemplosPipes {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro!: string;

  protected addCurso(novoLivro: any): void {
    this.livros.push(novoLivro);
  }

  protected obterCurso() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }

      return false;
    });
  }
}

/**
 * !IMPORTANTE
 *
 * Não faça filtro de array no template, isso deve ser
 * feito na classe.
 */
