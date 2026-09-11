import { JsonPipe, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { FormDebug } from '../form-debug/form-debug';

/**
 * FormsModule é o modulo utilizado
 * para o template form
 *
 * template form => equals forms defined on template
 */

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, FormDebug, NgClass],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss',
})
export class TemplateForm {
  protected model = signal({
    name: null,
    email: null,
    cep: null,
    number: null,
    complement: null,
    street: null,
    neighborhood: null,
    city: null,
    state: null,
  });

  protected onSubmit(form: any): void {
    console.log(form);

    // console.log(this.model());
  }

  protected checkIsValidAndTouched(field: NgModel) {
    return !field.valid && field.touched;
  }

  protected applyCSSError(field: NgModel) {
    return {
      'is-invalid': this.checkIsValidAndTouched(field),
    };
  }
}

/**
 *  Aplicando validações nos campos
 */
