import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarCurso } from './criar-curso';

describe('CriarCurso', () => {
  let component: CriarCurso;
  let fixture: ComponentFixture<CriarCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarCurso],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarCurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
