import { Location, NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CursosService } from '../../services/cursos/cursos-service';
import { AlertModalService } from '../../../../shared/alert-modal/alert-modal-service';

@Component({
  imports: [ReactiveFormsModule, NgClass],
  selector: 'app-cursos-form',
  styleUrl: './cursos-form.scss',
  templateUrl: './cursos-form.html',
})
export class CursosForm implements OnInit {
  readonly #fb = inject(FormBuilder);
  readonly #cursosService = inject(CursosService);
  readonly #alertModalService = inject(AlertModalService);
  readonly #location = inject(Location);

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

    this.#cursosService.create(this.form().value).subscribe({
      next: () => {
        this.#alertModalService.showAlertSuccess('Criado com sucesso!');

        this.#location.back();
      },
      error: () => {
        this.#alertModalService.showAlertDanger('Erro ao criar curso, tente novamente.');
      },
      complete: () => {},
    });
  }
  protected onCancel(): void {
    this.submitted.set(false);
    this.form().reset();
  }
}
