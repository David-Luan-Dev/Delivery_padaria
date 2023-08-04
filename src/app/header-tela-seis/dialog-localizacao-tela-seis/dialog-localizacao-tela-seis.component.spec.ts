import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocalizacaoTelaSeisComponent } from './dialog-localizacao-tela-seis.component';

describe('DialogLocalizacaoTelaSeisComponent', () => {
  let component: DialogLocalizacaoTelaSeisComponent;
  let fixture: ComponentFixture<DialogLocalizacaoTelaSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLocalizacaoTelaSeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLocalizacaoTelaSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
