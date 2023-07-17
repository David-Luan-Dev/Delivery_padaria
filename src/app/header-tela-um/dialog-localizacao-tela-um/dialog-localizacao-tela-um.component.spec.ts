import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocalizacaoTelaUmComponent } from './dialog-localizacao-tela-um.component';

describe('DialogLocalizacaoTelaUmComponent', () => {
  let component: DialogLocalizacaoTelaUmComponent;
  let fixture: ComponentFixture<DialogLocalizacaoTelaUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLocalizacaoTelaUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLocalizacaoTelaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
