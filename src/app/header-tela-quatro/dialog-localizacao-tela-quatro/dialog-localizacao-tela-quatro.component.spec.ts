import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocalizacaoTelaQuatroComponent } from './dialog-localizacao-tela-quatro.component';

describe('DialogLocalizacaoTelaQuatroComponent', () => {
  let component: DialogLocalizacaoTelaQuatroComponent;
  let fixture: ComponentFixture<DialogLocalizacaoTelaQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLocalizacaoTelaQuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLocalizacaoTelaQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
