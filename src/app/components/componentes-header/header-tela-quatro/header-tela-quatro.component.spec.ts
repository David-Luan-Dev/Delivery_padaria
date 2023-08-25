import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelaQuatroComponent } from './header-tela-quatro.component';

describe('HeaderTelaQuatroComponent', () => {
  let component: HeaderTelaQuatroComponent;
  let fixture: ComponentFixture<HeaderTelaQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTelaQuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTelaQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
