import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgswitch } from './diretiva-ngswitch';

describe('DiretivaNgswitch', () => {
  let component: DiretivaNgswitch;
  let fixture: ComponentFixture<DiretivaNgswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaNgswitch],
    }).compileComponents();

    fixture = TestBed.createComponent(DiretivaNgswitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
