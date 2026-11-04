import { TestBed } from '@angular/core/testing';
import { Cursos2 } from './cursos2';

describe('Cursos2', () => {
  let service: Cursos2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cursos2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
