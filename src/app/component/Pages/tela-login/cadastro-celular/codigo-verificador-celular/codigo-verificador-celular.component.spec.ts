import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoVerificadorCelularComponent } from './codigo-verificador-celular.component';

describe('CodigoVerificadorCelularComponent', () => {
  let component: CodigoVerificadorCelularComponent;
  let fixture: ComponentFixture<CodigoVerificadorCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoVerificadorCelularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoVerificadorCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
