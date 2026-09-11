import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldControl } from './field-control';

describe('FieldControl', () => {
  let component: FieldControl;
  let fixture: ComponentFixture<FieldControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
