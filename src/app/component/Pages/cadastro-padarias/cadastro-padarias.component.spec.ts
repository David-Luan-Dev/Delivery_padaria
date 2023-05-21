import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPadariasComponent } from './cadastro-padarias.component';

describe('CadastroPadariasComponent', () => {
  let component: CadastroPadariasComponent;
  let fixture: ComponentFixture<CadastroPadariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPadariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPadariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
