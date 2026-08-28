import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]',
})
export class NgElse {
  readonly #templateRef = inject(TemplateRef);
  readonly #viewContainerRef = inject(ViewContainerRef);

  @Input() set ngElse(condition: boolean) {
    if (!condition) {
      this.#viewContainerRef.createEmbeddedView(this.#templateRef);
    } else {
      this.#viewContainerRef.clear();
    }
  }
}

/**
 * Property binding => input property
 */

/**
 * Preciso estudar mais sobre web-componentes
 */
