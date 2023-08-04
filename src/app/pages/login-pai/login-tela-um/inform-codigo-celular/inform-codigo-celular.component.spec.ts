import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformCodigoCelularComponent } from './inform-codigo-celular.component';

describe('InformCodigoCelularComponent', () => {
  let component: InformCodigoCelularComponent;
  let fixture: ComponentFixture<InformCodigoCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformCodigoCelularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformCodigoCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
