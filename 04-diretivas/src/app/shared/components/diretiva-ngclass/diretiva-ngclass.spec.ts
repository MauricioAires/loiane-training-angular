import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgclass } from './diretiva-ngclass';

describe('DiretivaNgclass', () => {
  let component: DiretivaNgclass;
  let fixture: ComponentFixture<DiretivaNgclass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaNgclass],
    }).compileComponents();

    fixture = TestBed.createComponent(DiretivaNgclass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
