import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceberCursoCriado } from './receber-curso-criado';

describe('ReceberCursoCriado', () => {
  let component: ReceberCursoCriado;
  let fixture: ComponentFixture<ReceberCursoCriado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceberCursoCriado],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceberCursoCriado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
