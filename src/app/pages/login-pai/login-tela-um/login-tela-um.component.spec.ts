import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelaUmComponent } from './login-tela-um.component';

describe('LoginTelaUmComponent', () => {
  let component: LoginTelaUmComponent;
  let fixture: ComponentFixture<LoginTelaUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTelaUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTelaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
