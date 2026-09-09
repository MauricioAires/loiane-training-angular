import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { studentDetailsResolver } from './student-details-resolver';

describe('studentDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => studentDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
