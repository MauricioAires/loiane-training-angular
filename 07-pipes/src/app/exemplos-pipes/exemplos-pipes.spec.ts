import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExemplosPipes } from './exemplos-pipes';

describe('ExemplosPipes', () => {
  let component: ExemplosPipes;
  let fixture: ComponentFixture<ExemplosPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemplosPipes],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemplosPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
