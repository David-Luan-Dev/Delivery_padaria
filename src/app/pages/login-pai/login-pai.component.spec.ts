import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPaiComponent } from './login-pai.component';

describe('LoginPaiComponent', () => {
  let component: LoginPaiComponent;
  let fixture: ComponentFixture<LoginPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
