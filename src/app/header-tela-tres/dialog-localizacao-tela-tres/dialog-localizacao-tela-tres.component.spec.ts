import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocalizacaoTelaTresComponent } from './dialog-localizacao-tela-tres.component';

describe('DialogLocalizacaoTelaTresComponent', () => {
  let component: DialogLocalizacaoTelaTresComponent;
  let fixture: ComponentFixture<DialogLocalizacaoTelaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLocalizacaoTelaTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLocalizacaoTelaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
