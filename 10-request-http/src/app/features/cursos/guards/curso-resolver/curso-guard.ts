import { type ResolveFn } from '@angular/router';
import type { Curso } from '../../models/curso';
import { inject } from '@angular/core';
import { CursosService } from '../../services/cursos/cursos-service';
import { Observable, of } from 'rxjs';

export const cursoGuard: ResolveFn<Curso> = (route, _): Observable<Curso> => {
  const cursosService = inject(CursosService);

  if (route.params && route.params['cursoId']) {
    return cursosService.loadById(route.params['cursoId']);
  }

  return of({
    id: '',
    nome: '',
  });
};
