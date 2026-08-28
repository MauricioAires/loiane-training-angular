import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

/**
 *  !IMPORTANT
 *
 * @Componentes são @Directive com template.
 * Logo;
 * @Directive são @Componentes são templates, então podemos
 * utilizar o ciclo de vida dos componentes.
 *
 *
 * Se @Componentes e @Directives são quase a mesma coisa, quando
 * eu crio um ou outro?
 */

@Directive({
  selector: '[highlight]',
})
export class Highlight implements OnInit {
  /**
   * @HostListener utilizado para escutar eventos
   */
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  /**
   * @HostBinding permiti fazer a associação de uma variável a uma
   * estilização.
   */
  @HostBinding('style.backgroundColor') get setColor(): string {
    return this.backgroundColor;
  }

  private backgroundColor!: string;
  @Input() defaultColor: string = 'white';
  /**
   * Colocar o nome do input igual o nome da directive eu posso
   * reduzir a quantidade de código que eu preciso declarar
   * para utilizar a diretiva.
   */
  @Input('highlight') highlightColor: string = 'yellow';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
