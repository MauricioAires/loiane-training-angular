import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, NgClass],
  selector: 'app-cursos-form',
  styleUrl: './cursos-form.scss',
  templateUrl: './cursos-form.html',
})
export class CursosForm implements OnInit {
  readonly #fb = inject(FormBuilder);

  readonly form = signal<FormGroup>({} as FormGroup);
  readonly submitted = signal(false);

  ngOnInit(): void {
    this.#buildForm();
  }

  #buildForm(): void {
    this.form.set(
      this.#fb.group({
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      }),
    );
  }

  protected hasError(field: string): ValidationErrors | null | undefined {
    return this.form().get(field)?.errors;
  }

  protected onSubmit(): void {
    this.submitted.set(true);
    if (!this.form().valid) return;
  }
  protected onCancel(): void {
    this.submitted.set(false);
    this.form().reset();
  }
}
