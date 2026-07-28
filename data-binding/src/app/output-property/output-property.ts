import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  imports: [],
  templateUrl: './output-property.html',
  styleUrl: './output-property.css',
  outputs: ['mudouValor'],
})
export class OutputProperty {
  @Input() valor: number = 0;

  /**
   * Eu posso omitir adicionando o nome do evento adicionando a lista
   * de metadados
   */
  mudouValor = new EventEmitter();
  // decorator
  // @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({
      novoValor: this.valor,
    });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({
      novoValor: this.valor,
    });
  }
}
