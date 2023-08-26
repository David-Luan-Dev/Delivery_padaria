import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaTelaUmComponent } from './cesta-tela-um.component';

describe('CestaTelaUmComponent', () => {
  let component: CestaTelaUmComponent;
  let fixture: ComponentFixture<CestaTelaUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CestaTelaUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestaTelaUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
