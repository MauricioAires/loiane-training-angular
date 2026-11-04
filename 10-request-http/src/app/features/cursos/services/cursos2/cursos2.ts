import { Service } from '@angular/core';
import { CrudService } from '../../../../shared/crud-service/crud-service';
import { Curso } from '../../models/curso';
import { environment } from '../../../../../environments/environment';

/**
 *  Herança x Composição
 */

@Service()
export class Cursos2 extends CrudService<Curso> {
  protected override readonly API_URL = `${environment.apiUrl}/cursos`;
}
