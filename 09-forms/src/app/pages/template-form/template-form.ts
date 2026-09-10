import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * FormsModule é o modulo utilizado
 * para o template form
 *
 * template form => equals forms defined on template
 */

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss',
})
export class TemplateForm {
  protected model = signal({
    name: 'Mauricio Aires',
    email: 'mau@gmail.com',
  });

  protected onSubmit(form: any): void {
    console.log(form?.value);

    console.log(this.model());
  }
}

/**
 *  Aplicando validações nos campos
 */
