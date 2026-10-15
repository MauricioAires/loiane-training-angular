import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CursosService } from './services/cursos/cursos-service';
import { Curso } from './models/curso';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterLinkWithHref],
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

  ngOnInit(): void {
    this.#list();
  }

  #list(): void {
    this.#cursosService
      .list()
      .pipe(take(1), takeUntilDestroyed(this.#destroyRef))
      .subscribe((res) => {
        this.cursos.set(res);
      });
  }
}
