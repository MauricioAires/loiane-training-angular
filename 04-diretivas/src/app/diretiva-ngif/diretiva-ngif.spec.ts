import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgif } from './diretiva-ngif';

describe('DiretivaNgif', () => {
  let component: DiretivaNgif;
  let fixture: ComponentFixture<DiretivaNgif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaNgif],
    }).compileComponents();

    fixture = TestBed.createComponent(DiretivaNgif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
