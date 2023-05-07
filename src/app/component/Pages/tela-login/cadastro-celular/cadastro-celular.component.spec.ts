import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCelularComponent } from './cadastro-celular.component';

describe('CadastroCelularComponent', () => {
  let component: CadastroCelularComponent;
  let fixture: ComponentFixture<CadastroCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCelularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
