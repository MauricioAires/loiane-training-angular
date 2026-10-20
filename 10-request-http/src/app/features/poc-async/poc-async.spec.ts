import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PocAsync } from './poc-async';

describe('PocAsync', () => {
  let component: PocAsync;
  let fixture: ComponentFixture<PocAsync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocAsync],
    }).compileComponents();

    fixture = TestBed.createComponent(PocAsync);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
