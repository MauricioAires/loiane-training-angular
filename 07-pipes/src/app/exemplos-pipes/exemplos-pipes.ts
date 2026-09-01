import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CamelCasePipe } from '../pipes/camel-case/camel-case-pipe';

@Component({
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, CamelCasePipe],
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
}
