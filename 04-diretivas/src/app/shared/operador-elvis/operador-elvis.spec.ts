import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadorElvis } from './operador-elvis';

describe('OperadorElvis', () => {
  let component: OperadorElvis;
  let fixture: ComponentFixture<OperadorElvis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperadorElvis],
    }).compileComponents();

    fixture = TestBed.createComponent(OperadorElvis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
