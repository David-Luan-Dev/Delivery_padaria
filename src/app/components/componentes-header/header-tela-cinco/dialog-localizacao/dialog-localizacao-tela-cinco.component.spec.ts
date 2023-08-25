import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLocalizacaoComponent } from './dialog-localizacao-tela-cinco.component';

describe('DialogLocalizacaoComponent', () => {
  let component: DialogLocalizacaoComponent;
  let fixture: ComponentFixture<DialogLocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLocalizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
