import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTelaDoisComponent } from './login-tela-dois.component';

describe('LoginTelaDoisComponent', () => {
  let component: LoginTelaDoisComponent;
  let fixture: ComponentFixture<LoginTelaDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTelaDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTelaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
