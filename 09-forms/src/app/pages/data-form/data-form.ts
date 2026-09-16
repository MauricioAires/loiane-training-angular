import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { FormDebug } from '../../shared/form-debug/form-debug';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { FieldControl } from '../../shared/field-control/field-control';
import { ICEPData } from '../template-form/template-form';

@Component({
  selector: 'app-data-form',
  imports: [ReactiveFormsModule, FormDebug, NgClass, FieldControl],
  templateUrl: './data-form.html',
  styleUrl: './data-form.scss',
})
export class DataForm implements OnInit {
  protected form = signal<FormGroup>({} as FormGroup);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private destroyRef: DestroyRef,
  ) {}

  // sempre que o componente for inicializado.
  public ngOnInit(): void {
    // Form mais verbosa para criar form.
    // A melhor é usando o construtor
    // this.form.set(
    //   new FormGroup({
    //     name: new FormControl(null),
    //     email: new FormControl(null),

    //     address: new FormGroup({
    //       name: new FormControl(null),
    //       email: new FormControl(null),
    //     }),
    //   }),
    // );

    /**
     * é a gosto do freguês.
     */
    /**
     * Particularmente acho mais simples
     */

    this.form.set(
      this.fb.group({
        // name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        name: [null, [Validators.required]],
        /**
         * A validação do email foi adicionado apenas na versão v4
         */
        email: [null, [Validators.required, Validators.email]],

        address: this.fb.group({
          cep: [null, [Validators.required]],
          number: [null, [Validators.required]],
          complement: [null],
          street: [null, [Validators.required]],
          neighborhood: [null, [Validators.required]],
          city: [null, [Validators.required]],
          state: [null, [Validators.required]],
        }),
      }),
    );
  }

  private checkFormValidations(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);

      // Modificado // sujo
      control?.markAsDirty();
      // control?.markAllAsDirty();
      // Tocado
      control?.markAsTouched();
      // control?.markAllAsTouched();

      if (control instanceof FormGroup) {
        this.checkFormValidations(control);
      }
    });
  }

  protected onSubmit(): void {
    // console.log(this.form().value);

    if (!this.form().valid) {
      this.checkFormValidations(this.form());
      return;
    }

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(this.form().value), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          console.log(this.form());

          /**
           * O reset deve ficar dentro do subscribe de de
           * preferência apenas no sucesso.
           */
          // this.form().reset();

          // this.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  protected reset(): void {
    this.form().reset();
  }

  protected checkValidEmail(): boolean {
    const field = this.form().get('email');

    return field?.getError('invalid') && field.touched;
  }

  protected checkIsValidAndTouched(fieldName: string): boolean {
    const field = this.form().get(fieldName);

    if (field === null) return false;

    return (!field.valid && (field.touched || field.dirty)) ?? false;
  }

  protected applyCSSError(fieldName: string) {
    return {
      'is-invalid': this.checkIsValidAndTouched(fieldName),
    };
  }

  protected getCEP(): void {
    let cep = this.form().get('address.cep')?.value || '';

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

    this.#resetForm();

    this.http
      .get(`//viacep.com.br/ws/${cep}/json`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          if ('erro' in res) {
            window.alert('CEP inválido');
            return;
          }

          this.#fillForm(res as ICEPData);
        },
        error: () => {
          window.alert('CEP inválido');
        },
      });
  }

  #resetForm(): void {
    this.form().patchValue({
      address: {
        complement: null,

        street: null,
        neighborhood: null,
        city: null,
        state: null,
      },
    });
  }

  #fillForm(res: ICEPData): void {
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

    this.form().patchValue({
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
