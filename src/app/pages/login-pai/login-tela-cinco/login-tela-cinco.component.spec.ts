import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelaCincoComponent } from './login-tela-cinco.component';

describe('LoginTelaCincoComponent', () => {
  let component: LoginTelaCincoComponent;
  let fixture: ComponentFixture<LoginTelaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTelaCincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTelaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
