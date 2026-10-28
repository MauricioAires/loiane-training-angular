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
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../models/curso';
import { map, switchMap } from 'rxjs';

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
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #router = inject(Router);

  readonly form = signal<FormGroup>({} as FormGroup);
  readonly submitted = signal(false);

  ngOnInit(): void {
    this.#buildForm();
    // this.#queryParams();
    // this.#getResolver();
  }

  // #queryParams(): void {
  //   /**
  //    * O próprio Angular destroy?
  //    * exceção?
  //    */
  //   this.#activatedRoute.params
  //     .pipe(
  //       map((params: any) => params['cursoId']),
  //       /**
  //        * Cancela as chamadas anteriores e faz apenas a última
  //        *
  //        * - switchMap
  //        * - concatMap => a ordem das chamadas importa a proxima só é executada depois
  //        * - mergeMap => a ordem não importa (Loi nunca usou em prod)
  //        * - exhaustMap => a proxima chamada só executa depois que a chamada é retornado
  //        * muito comum em login
  //        */
  //       switchMap((cursoId) => this.#cursosService.loadById(cursoId)),
  //       // switchMap((curso) => obterAualas)
  //     )
  //     .subscribe((curso: Curso) => {
  //       this.#fillForm(curso);
  //     });
  // }
  // #queryParams(): void {
  //   this.#activatedRoute.params.subscribe((params: any) => {
  //     const cursoId = params['cursoId'];

  //     /**
  //      * Cadê a verificação de id?
  //      */

  //     /**
  //      * A  lógica sempre deve ser feita dentro do subscribe!
  //      */

  //     const curso$ = this.#cursosService.loadById(cursoId);

  //     curso$.subscribe((curso) => {
  //       this.#fillForm(curso);
  //     });
  //   });
  // }

  // #fillForm(curso: Curso): void {
  //   this.form().patchValue({
  //     nome: curso.nome,
  //     id: curso.id,
  //   });
  // }

  /**
   * Pode ter campo no componente mais não no HTML
   * mas tudo que tem no html deve ter no componente.
   */

  #buildForm(): void {
    const curso = this.#activatedRoute.snapshot.data['curso'];

    this.form.set(
      this.#fb.group({
        /**
         * Pode existir no form e nào precisa existir no HTML
         */
        id: [curso.id],
        nome: [
          curso.nome,
          [Validators.required, Validators.minLength(3), Validators.maxLength(250)],
        ],
      }),
    );
  }

  protected hasError(field: string): ValidationErrors | null | undefined {
    return this.form().get(field)?.errors;
  }

  protected onSubmit(): void {
    this.submitted.set(true);
    if (!this.form().valid) return;

    this.#save();
  }

  #save(): void {
    let successMessage = 'Criado com sucesso!';
    let errorMessage = 'Erro ao criar curso, tente novamente.';

    if (this.form().value.id) {
      successMessage = 'Curso atualizado com sucesso!';
      errorMessage = 'Erro ao atualizar curso, tente novamente.';
    }

    this.#cursosService.save(this.form().value).subscribe({
      next: () => {
        this.#alertModalService.showAlertSuccess(successMessage);

        this.#router.navigate(['cursos']);
      },
      error: () => {
        this.#alertModalService.showAlertDanger(errorMessage);
      },
      complete: () => {},
    });
  }

  protected onCancel(): void {
    this.submitted.set(false);
    this.form().reset();
  }
}
