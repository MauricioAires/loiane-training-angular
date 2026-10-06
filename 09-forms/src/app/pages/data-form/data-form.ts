import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { FormDebug } from '../../shared/form-debug/form-debug';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { FieldControl } from '../../shared/field-control/field-control';
import { ICEPData } from '../template-form/template-form';
import { DropdownService } from '../../shared/services/dropdown/dropdown';
import { StateBR } from '../../shared/models/state-br.model';
import { CepService } from '../../shared/services/cep-service/cep';
import {
  catchError,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
  Observable,
  of,
  retry,
  single,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import { Position } from '../../shared/models/position.mode';
import { Technologies } from '../../shared/models/technologies.model';
import { NewsLetter } from '../../shared/models/news-letter.model';
import { formValidations } from '../../shared/utils/form-validation';
import { CheckEmailService } from './services/check-email/check-email-service';
import { ErrorMsg } from '../../shared/error-msg/error-msg';

@Component({
  selector: 'app-data-form',
  imports: [ReactiveFormsModule, FormDebug, NgClass, FieldControl, AsyncPipe, ErrorMsg],
  templateUrl: './data-form.html',
  styleUrl: './data-form.scss',
})
export class DataForm implements OnInit {
  protected form = signal<FormGroup>({} as FormGroup);
  // protected states = signal<StateBR[]>([]);
  protected states = signal<Observable<StateBR[]>>(of());
  protected positions = signal<Position[]>([]);
  protected technologies = signal<Technologies[]>([]);
  protected newsletter = signal<NewsLetter[]>([]);
  protected frameworks = signal(['Angular', 'React', 'Vue', 'Sancha']);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private destroyRef: DestroyRef,
    private dropdownService: DropdownService,
    private cepService: CepService,
    private checkEmailService: CheckEmailService,
  ) {}

  // sempre que o componente for inicializado.
  ngOnInit(): void {
    this.#fetchStates();
    this.#fetchPositions();
    this.#fetchTechnologies();
    this.#fetchNewsletter();

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
    this.#buildForm();

    this.#reactiveForm();
  }

  #reactiveForm(): void {
    /**
     * Observable
     * Essas são as funções que dão nome ao forme
     */
    // this.form().statusChanges
    // this.form().valueChanges
    /**
     * programação funcional e programação reativa
     */
    this.form()
      .get('address.cep')
      ?.statusChanges.pipe(
        distinctUntilChanged(),
        tap((value) => console.log('CEP Value', value)),
        switchMap((status) =>
          status === 'VALID'
            ? this.cepService.getCEP(this.form().get('address.cep')!.value)
            : of(null),
        ),
      )
      .subscribe((dados) => (dados ? this.#fillForm(dados as ICEPData) : {}));

    /**
     * Conseguimos transformar qualquer valor JavaScript em um
     * observable utilizando apenas RxJs
     */
  }

  #checkEmail(email: string): void {
    /**
     * Os observables são preguiçosos a requisição
     * só vai ocorrer se fizermos um subscribe.
     */

    this.checkEmailService
      .checkEmail(email)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  /**
   *
   * Está correta essa validação?
   * E se a requisição demorar para retornar
   * e se de erro ?
   *
   * O que você está desenvolvendo é um padrão real de aplicações de produção: validação assíncrona com controle de requisições, tratamento de erros e feedback imediato ao usuário.
   *
   * @param formControl
   * @returns
   */
  #checkEmailValidate(formControl: FormControl) {
    /**
     * Validação assíncronas não precisa de destroy o própio angular faz isso!
     *
     *     takeUntilDestroyed(this.destroyRef),
     *
     *
     */
    return timer(300).pipe(
      switchMap(() => this.checkEmailService.checkEmail(formControl.value)),

      map((existsEmail) =>
        existsEmail
          ? {
              emailUnavailable: true,
            }
          : null,
      ),
      catchError(() => of({ emailCheckFailed: true })),
      take(1),
    );
  }

  #buildForm(): void {
    this.form.set(
      this.fb.group({
        // name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        /**
         * A validação do email foi adicionado apenas na versão v4
         */
        /**
         * Estrutura do objeto de criação do input
         *
         * 1. Valor inicial
         * 2. Validação síncrona
         * 3. Validações assíncronas (sim, pode ser mais de uma)
         *
         * As validações assíncronas só são executadas quando o campo está valido
         * após passar pelas validações síncronas
         */
        email: [
          null,
          [Validators.required, Validators.email],
          [this.#checkEmailValidate.bind(this)],
        ],
        /**
         * essa mesma estrátegia pode ser utilizada para configmração
         * de senha.
         */
        confirmEmail: [null, [Validators.required, formValidations.equalsTo('email')]],

        address: this.fb.group({
          cep: [null, [Validators.required, formValidations.cepValidator]],
          number: [null, [Validators.required]],
          complement: [null],
          street: [null, [Validators.required]],
          neighborhood: [null, [Validators.required]],
          city: [null, [Validators.required]],
          state: ['', [Validators.required]],
        }),

        position: [null, Validators.required],
        technologies: [null, Validators.required],
        newsletter: ['n'],
        acceptTerms: [null, Validators.requiredTrue],
        frameworks: this.#buildFrameworks(),
      }),
    );
  }

  /**
   * O padrão de mercado é criar o array fora da lógica principal
   * de criação do form
   */
  #buildFrameworks() {
    const values = this.frameworks().map(() => new FormControl(false));

    return this.fb.array(values, formValidations.requiredMinCheckbox(1));
  }

  #fetchTechnologies(): void {
    this.technologies.set(this.dropdownService.fetchTechnologies());
  }

  #fetchStates(): void {
    this.states.set(this.dropdownService.fetchStates());
  }

  #fetchPositions(): void {
    this.positions.set(this.dropdownService.fetchPositions());
  }

  #fetchNewsletter(): void {
    this.newsletter.set(this.dropdownService.fetchNewsletter());
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
      // return;
    }

    // Fazendo uma cópia para não modificar o form
    let values = Object.assign(this.form().value);

    /**
     * Imutabilidade de objetos
     */
    values = Object.assign(values, {
      frameworks: values.frameworks
        .map((value: boolean, index: number) => {
          if (value) {
            return this.frameworks()[index];
          }
          return null;
        })
        .filter(Boolean),
    });

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(values), {
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

  protected setPosition(): void {
    const position = {
      name: 'Dev 2',
      level: 'Mid-leve',
      description: 'Dev Mid-level',
    };

    this.form().get('position')?.setValue(position);
  }

  protected setTechnologies(): void {
    this.form().get('technologies')?.setValue(['java', 'javascript', 'php']);
  }

  protected comparePosition(obj1: Position, obj2: Position): boolean {
    if (obj1 && obj2) {
      return obj1.level === obj2.level && obj1.name === obj2.name;
    }
    return obj1 === obj2;
  }

  protected compareTechnology(a: string, b: string): boolean {
    return a === b;
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

  protected checkIsRequired(fieldName: string): boolean {
    const field = this.form().get(fieldName);

    if (field === null) return false;

    return field.hasError('required');
  }

  protected applyCSSError(fieldName: string) {
    return {
      'is-invalid': this.checkIsValidAndTouched(fieldName),
    };
  }

  #getCEP(): void {
    const cep = this.form().get('address.cep')?.value || '';

    if (cep === '' || cep == null) return;

    // const cepRegex = /^[0-9]{8}$/;

    // if (!cepRegex.test(cep)) return;

    this.#resetForm();

    this.cepService
      .getCEP(cep)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.#fillForm(res as ICEPData);
        },
        error: () => {},
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
