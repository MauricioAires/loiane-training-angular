import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  url: string = 'https://www.google.com';

  urlImagem = 'https://picsum.photos/200/200';
  cursoAngular: boolean = true;

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }
}
