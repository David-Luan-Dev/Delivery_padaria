import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelaQuatroComponent } from './login-tela-quatro.component';

describe('LoginTelaQuatroComponent', () => {
  let component: LoginTelaQuatroComponent;
  let fixture: ComponentFixture<LoginTelaQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTelaQuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTelaQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
