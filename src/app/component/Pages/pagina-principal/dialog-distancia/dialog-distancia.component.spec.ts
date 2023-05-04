import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDistanciaComponent } from './dialog-distancia.component';

describe('DialogDistanciaComponent', () => {
  let component: DialogDistanciaComponent;
  let fixture: ComponentFixture<DialogDistanciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDistanciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
