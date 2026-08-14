// import { Directive, ElementRef, HostBinding, HostListener, inject, Renderer2 } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouse {
  // readonly #elementRef = inject(ElementRef);
  // readonly #renderer = inject(Renderer2);

  /**
   * HostListener é um metadata
   *
   * Um metadata que faz com que a diretiva escure
   * os eventos do elemento hospedeiro
   */
  @HostListener('mouseenter') onMouseOver() {
    // this.#renderer.setStyle(this.#elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  /**
   * O HostListener fica escutando eventos no hospedeiro da diretiva
   */
  @HostListener('mouseleave') onMouseLeave() {
    /**
     * Existe uma forma mais elegante de mudar o estilo do componente e além disso evitar a duplicação de código.
     * Para isso utilizando o HostBinding.
     */
    // this.#renderer.setStyle(this.#elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }
  /**
   * O metadata HostBinding permite fazer a ligação de um atributo da diretiva e um atributo do elemento HTML.
   */

  // @HostBinding('style.backgroundColor') backgroundColor!: string;

  /**
   * Além de fazer a ligação direta com o atributo também podemos criar
   * funções conectada com o metadata e dessa forma dentro da função fazer outros eventos.
   */
  /**
   * Se precisar de alguma manipulação utilizamos esse modelo
   * se não, podemos criar apenas a referência para a variável.
   */
  @HostBinding('style.backgroundColor') get setColor(): string {
    /**
     * Realizar outras ações.
     */
    return this.backgroundColor;
  }

  private backgroundColor!: string;
  /**
   * HostBinding permite fazer o binding/associação de um atributo ou uma classe
   * do HTML para uma variável.
   */
}
