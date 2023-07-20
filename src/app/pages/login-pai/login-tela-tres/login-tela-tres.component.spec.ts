import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelaTresComponent } from './login-tela-tres.component';

describe('LoginTelaTresComponent', () => {
  let component: LoginTelaTresComponent;
  let fixture: ComponentFixture<LoginTelaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTelaTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTelaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
