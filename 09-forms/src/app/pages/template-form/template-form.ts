import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { FormDebug } from '../../shared/form-debug/form-debug';
import { FieldControl } from '../../shared/field-control/field-control';

/**
 * FormsModule é o modulo utilizado
 * para o template form
 *
 * template form => equals forms defined on template
 */

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, FormDebug, NgClass, FieldControl],
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

  protected checkIsValidAndTouched(field: NgModel): boolean {
    return (!field.valid && field.touched) ?? false;
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
