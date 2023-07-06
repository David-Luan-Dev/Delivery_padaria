import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPagamentoComponent } from './from-pagamento.component';

describe('FromPagamentoComponent', () => {
  let component: FromPagamentoComponent;
  let fixture: ComponentFixture<FromPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromPagamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
