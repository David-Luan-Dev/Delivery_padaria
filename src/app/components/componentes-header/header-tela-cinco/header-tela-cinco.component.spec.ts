import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelaCincoComponent } from './header-tela-cinco.component';

describe('HeaderTelaCincoComponent', () => {
  let component: HeaderTelaCincoComponent;
  let fixture: ComponentFixture<HeaderTelaCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTelaCincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTelaCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
