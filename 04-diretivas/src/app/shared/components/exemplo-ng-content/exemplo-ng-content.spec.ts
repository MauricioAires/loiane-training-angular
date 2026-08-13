import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgContent } from './exemplo-ng-content';

describe('ExemploNgContent', () => {
  let component: ExemploNgContent;
  let fixture: ComponentFixture<ExemploNgContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploNgContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploNgContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
