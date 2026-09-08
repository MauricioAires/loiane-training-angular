import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { studentsDeactivateGuard } from './students-deactivate-guard';

describe('studentsDeactivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => studentsDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
