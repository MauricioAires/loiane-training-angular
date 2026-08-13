import { TestBed } from '@angular/core/testing';

import { DiretivaIf } from './diretiva-if';

describe('DiretivaIf', () => {
  let service: DiretivaIf;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivaIf);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
