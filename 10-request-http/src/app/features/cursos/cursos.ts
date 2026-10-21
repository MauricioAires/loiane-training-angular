import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CursosService } from './services/cursos/cursos-service';
import { Curso } from './models/curso';
import { catchError, EMPTY, map, Observable, of, Subject, switchMap, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModal } from '../../shared/alert-modal/alert-modal';
import { AlertModalService } from '../../shared/alert-modal/alert-modal-service';

@Component({
  imports: [RouterLinkWithHref, AsyncPipe],
  selector: 'app-cursos',
  styleUrl: './cursos.scss',
  templateUrl: './cursos.html',
  /**
   * Quando isso realmente é útil?
   */
  preserveWhitespaces: true,
})
export class Cursos implements OnInit {
  readonly #cursosService = inject(CursosService);
  readonly #alertModalService = inject(AlertModalService);

  readonly #destroyRef = inject(DestroyRef);

  protected cursos = signal<Curso[]>([]);
  readonly #bsModalRef = signal<BsModalRef | null>(null);
  /**
   * Anotação Finlandesa $ que consiste em
   * adicionar uma cifrão ($) no final de uma
   * variável ou função para indicar que está
   * trabalhando com observable.
   *
   * Pratica adotada pela comunidade.
   */

  protected cursos$!: Observable<Curso[]>;
  /**
   * Não precisa de um unsubscribe porque estou
   * utilizando o pipe async e o Angular
   * já fazer isso automaticamente.
   */
  protected error$ = new Subject<boolean>();

  ngOnInit(): void {
    // this.#list();

    this.onRefresh();
  }

  protected onRefresh(): void {
    this.cursos$ = this.#cursosService.list().pipe(
      catchError(() => {
        // console.error(error);
        this.#handleError();
        this.error$.next(true);

        return EMPTY;
        // return of();
      }),
    );

    this.#cursosService
      .list()
      .pipe(
        tap(),
        // switchMap(),
        // map(),
        /**
         * Para usar de forma eficiente o catchError deve ser o último!
         */
        catchError(() => {
          /**
           * HANDLE ERROS
           */
          // this.#handleError();
          return EMPTY;
        }),
      )
      .subscribe({
        next: () => {
          console.log('sucesso');
        },
        error: () => {
          console.error('error');
        },
        complete: () => {
          console.log('Observable completo!');
        },
      });
  }

  #handleError(): void {
    this.#alertModalService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  #list(): void {
    this.#cursosService
      .list()
      .pipe(take(1), takeUntilDestroyed(this.#destroyRef))
      .subscribe((res) => {
        this.cursos.set(res);
      });
  }
  /**
   * Problema de vazamento de memória
   * Memory leak
   * O pipe async se des escreve automaticamente.
   */
}
