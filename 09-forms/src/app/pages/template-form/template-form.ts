import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDebug } from '../form-debug/form-debug';

/**
 * FormsModule é o modulo utilizado
 * para o template form
 *
 * template form => equals forms defined on template
 */

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, FormDebug],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss',
})
export class TemplateForm {
  protected model = signal({
    name: null,
    email: null,
  });

  protected onSubmit(form: any): void {
    console.log(form);

    // console.log(this.model());
  }
}

/**
 *  Aplicando validações nos campos
 */
