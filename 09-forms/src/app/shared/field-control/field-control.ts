import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-field-control]',
  imports: [],
  templateUrl: './field-control.html',
  styleUrl: './field-control.scss',
  // encapsulation: ViewEncapsulation.ShadowDom,
  host: {
    '[class.invalid-feedback]': 'showError()',
  },
})
export class FieldControl {
  readonly showError = input<boolean>(false);
  readonly message = input<string>();
}
