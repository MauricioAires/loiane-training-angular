import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from '../meu-form/meu-form-module';
import { InputProperty } from '../input-property/input-property';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.html',
  // styleUrl: './data-binding.css',
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `,
  ],
  imports: [FormsModule, MeuFormModule, InputProperty],
  standalone: true,
})
export class DataBinding {
  url: string = 'https://www.google.com';

  urlImagem = 'https://picsum.photos/200/200';
  cursoAngular: boolean = true;

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (event.target as HTMLInputElement).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
