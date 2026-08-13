import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgstyle } from './diretiva-ngstyle';

describe('DiretivaNgstyle', () => {
  let component: DiretivaNgstyle;
  let fixture: ComponentFixture<DiretivaNgstyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaNgstyle],
    }).compileComponents();

    fixture = TestBed.createComponent(DiretivaNgstyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
