import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CursosService } from './services/cursos/cursos-service';
import { Curso } from './models/curso';
import { Observable, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

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
  protected cursos = signal<Curso[]>([]);

  readonly #cursosService = inject(CursosService);
  readonly #destroyRef = inject(DestroyRef);

  /**
   * Anotação Finlandesa $ que consiste em
   * adicionar uma cifrão ($) no final de uma
   * variável ou função para indicar que está
   * trabalhando com observable.
   *
   * Pratica adotada pela comunidade.
   */

  protected cursos$!: Observable<Curso[]>;

  ngOnInit(): void {
    // this.#list();

    this.cursos$ = this.#cursosService.list();
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
