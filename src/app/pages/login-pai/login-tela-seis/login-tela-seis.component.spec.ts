import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelaSeisComponent } from './login-tela-seis.component';

describe('LoginTelaSeisComponent', () => {
  let component: LoginTelaSeisComponent;
  let fixture: ComponentFixture<LoginTelaSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTelaSeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTelaSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
