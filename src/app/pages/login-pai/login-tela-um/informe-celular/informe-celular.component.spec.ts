import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeCelularComponent } from './informe-celular.component';

describe('InformeCelularComponent', () => {
  let component: InformeCelularComponent;
  let fixture: ComponentFixture<InformeCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeCelularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
