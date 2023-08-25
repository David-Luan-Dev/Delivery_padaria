import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocalizacaoTelaDoisComponent } from './dialog-localizacao-tela-dois.component';

describe('DialogLocalizacaoTelaDoisComponent', () => {
  let component: DialogLocalizacaoTelaDoisComponent;
  let fixture: ComponentFixture<DialogLocalizacaoTelaDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLocalizacaoTelaDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLocalizacaoTelaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
