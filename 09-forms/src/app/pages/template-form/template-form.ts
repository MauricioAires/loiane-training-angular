import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FormDebug } from '../../shared/form-debug/form-debug';
import { FieldControl } from '../../shared/field-control/field-control';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

/**
 * FormsModule é o modulo utilizado
 * para o template form
 *
 * template form => equals forms defined on template
 */

export interface ICEPData {
  cep: string;
  complemento: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  estado: string;
}

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, FormDebug, NgClass, FieldControl],
  templateUrl: './template-form.html',
  styleUrl: './template-form.scss',
})
export class TemplateForm {
  readonly #http = inject(HttpClient);
  readonly #destroyRef = inject(DestroyRef);

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

  protected getCEP(cep: string, cepForm: NgForm): void {
    cep = cep.replace(/\D/g, '');

    if (cep === '') return;

    const cepRegex = /^[0-9]{8}$/;

    if (!cepRegex.test(cep)) return;

    /**
     * 1. Loading
     * 2. Sucesso ok
     * 3. Error
     * 4. Empty ok
     */

    this.#resetForm(cepForm);

    this.#http
      .get(`//viacep.com.br/ws/${cep}/json`)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (res) => {
          if ('erro' in res) {
            window.alert('CEP inválido');
            return;
          }

          this.#fillForm(cepForm, res as ICEPData);
        },
        error: () => {
          window.alert('CEP inválido');
        },
      });
  }

  #resetForm(cepForm: NgForm): void {
    cepForm.form.patchValue({
      address: {
        complement: null,

        street: null,
        neighborhood: null,
        city: null,
        state: null,
      },
    });
  }

  #fillForm(cepForm: NgForm, res: ICEPData): void {
    // cepForm.setValue({
    //   name: cepForm.value.name,
    //   email: cepForm.value.email,
    //   address: {
    //     cep: res.cep,
    //     number: cepForm.value.address.number,
    //     complement: res.complemento,

    //     street: res.logradouro,
    //     neighborhood: res.bairro,
    //     city: res.localidade,
    //     state: res.estado,
    //   },
    // });

    cepForm.form.patchValue({
      address: {
        // cep: res.cep,
        complement: res.complemento,

        street: res.logradouro,
        neighborhood: res.bairro,
        city: res.localidade,
        state: res.estado,
      },
    });
  }
}

/**
 *  Aplicando validações nos campos
 */
