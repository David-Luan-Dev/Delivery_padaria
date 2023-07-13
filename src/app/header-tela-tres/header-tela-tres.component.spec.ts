import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelaTresComponent } from './header-tela-tres.component';

describe('HeaderTelaTresComponent', () => {
  let component: HeaderTelaTresComponent;
  let fixture: ComponentFixture<HeaderTelaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTelaTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTelaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
