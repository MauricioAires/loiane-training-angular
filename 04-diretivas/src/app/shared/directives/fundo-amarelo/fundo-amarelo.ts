import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  // selector: '[fundoAmarelo]',
  selector: 'button[fundoAmarelo]',
  /**
   * Para restringir o uso de uma diretiva a apenas um tipo
   *  de componente basta colocar o nome da tag antes dos
   * colchetes.
   */
})
export class FundoAmarelo {
  readonly #elementRef = inject(ElementRef);
  readonly #renderer = inject(Renderer2);
  /**
   * Na própria documentação do Angular recomenda não utilizar
   * o ElementRef, porque ?
   *
   * Porque ele acessa direto a DOM e deixa o código vulnerável
   * a ataque do tipo XSS (Cross Site Scripting)
   *
   * Dessa forma o ElementRef deve ser utilizado apenas em último caso.
   */

  constructor() {
    // this.#elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.#renderer.setStyle(this.#elementRef.nativeElement, 'background-color', 'yellow');
  }
}

/**
 *  O ElementRef representa todo e qualquer
 * elemento HTML.
 */
