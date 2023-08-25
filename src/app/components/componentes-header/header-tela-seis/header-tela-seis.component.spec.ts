import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelaSeisComponent } from './header-tela-seis.component';

describe('HeaderTelaSeisComponent', () => {
  let component: HeaderTelaSeisComponent;
  let fixture: ComponentFixture<HeaderTelaSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTelaSeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTelaSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
