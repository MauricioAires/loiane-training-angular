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
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { FieldControl } from '../../shared/field-control/field-control';
import { ICEPData } from '../template-form/template-form';
import { DropdownService } from '../../shared/services/dropdown/dropdown';
import { StateBR } from '../../shared/models/state-br.model';
import { CepService } from '../../shared/services/cep-service/cep';
import { Observable, of } from 'rxjs';
import { Position } from '../../shared/models/position.mode';
import { Technologies } from '../../shared/models/technologies.model';
import { NewsLetter } from '../../shared/models/news-letter.model';

@Component({
  selector: 'app-data-form',
  imports: [ReactiveFormsModule, FormDebug, NgClass, FieldControl, AsyncPipe],
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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private destroyRef: DestroyRef,
    private dropdownService: DropdownService,
    private cepService: CepService,
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
  }

  #buildForm(): void {
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
          state: ['', [Validators.required]],
        }),

        position: [null, Validators.required],
        technologies: [null, Validators.required],
        newsletter: ['n'],
        acceptTerms: [null, Validators.requiredTrue],
      }),
    );
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

  protected applyCSSError(fieldName: string) {
    return {
      'is-invalid': this.checkIsValidAndTouched(fieldName),
    };
  }

  protected getCEP(): void {
    let cep = this.form().get('address.cep')?.value || '';

    if (cep === '' || cep == null) return;

    const cepRegex = /^[0-9]{8}$/;

    if (!cepRegex.test(cep)) return;

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
