import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgfor } from './diretiva-ngfor';

describe('DiretivaNgfor', () => {
  let component: DiretivaNgfor;
  let fixture: ComponentFixture<DiretivaNgfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaNgfor],
    }).compileComponents();

    fixture = TestBed.createComponent(DiretivaNgfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
