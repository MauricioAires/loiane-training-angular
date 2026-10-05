import { Component, input } from '@angular/core';
import type { AbstractControl, FormControl } from '@angular/forms';
import { formValidations } from '../utils/form-validation';

@Component({
  selector: '[app-error-msg]',
  imports: [],
  templateUrl: './error-msg.html',
  styleUrl: './error-msg.scss',
  host: {
    '[class.invalid-feedback]': '!!errorMessage',
  },
})
export class ErrorMsg {
  // readonly showError = input<boolean>(false);
  // readonly message = input<string>();

  readonly control = input<AbstractControl | undefined | null>();
  readonly label = input.required<string>();

  /**
   * Não vai ter o método set
   * e não pode ser atribuído um valor
   */
  get errorMessage() {
    for (const propertyName in this.control()?.errors) {
      const field = this.control();

      const isTouched = field?.touched;

      if (field?.errors && propertyName in field.errors && isTouched) {
        return formValidations.getErrorMsg(this.label(), propertyName, field.errors[propertyName]);
      }
    }

    return null;
  }
}
