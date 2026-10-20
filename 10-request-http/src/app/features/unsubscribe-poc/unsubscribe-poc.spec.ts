import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnsubscribePoc } from './unsubscribe-poc';

describe('UnsubscribePoc', () => {
  let component: UnsubscribePoc;
  let fixture: ComponentFixture<UnsubscribePoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsubscribePoc],
    }).compileComponents();

    fixture = TestBed.createComponent(UnsubscribePoc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
