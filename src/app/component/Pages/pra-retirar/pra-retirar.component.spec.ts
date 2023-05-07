import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraRetirarComponent } from './pra-retirar.component';

describe('PraRetirarComponent', () => {
  let component: PraRetirarComponent;
  let fixture: ComponentFixture<PraRetirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraRetirarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraRetirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
