import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelaDoisComponent } from './header-tela-dois.component';

describe('HeaderTelaDoisComponent', () => {
  let component: HeaderTelaDoisComponent;
  let fixture: ComponentFixture<HeaderTelaDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTelaDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTelaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
