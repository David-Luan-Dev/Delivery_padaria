import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelaUmComponent } from './header-tela-um.component';

describe('HeaderTelaUmComponent', () => {
  let component: HeaderTelaUmComponent;
  let fixture: ComponentFixture<HeaderTelaUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTelaUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTelaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
