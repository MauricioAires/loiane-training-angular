import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomizadas } from './diretivas-customizadas';

describe('DiretivasCustomizadas', () => {
  let component: DiretivasCustomizadas;
  let fixture: ComponentFixture<DiretivasCustomizadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivasCustomizadas],
    }).compileComponents();

    fixture = TestBed.createComponent(DiretivasCustomizadas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
