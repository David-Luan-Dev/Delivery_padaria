import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoVerificadorEmailComponent } from './codigo-verificador-email.component';

describe('CodigoVerificadorEmailComponent', () => {
  let component: CodigoVerificadorEmailComponent;
  let fixture: ComponentFixture<CodigoVerificadorEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoVerificadorEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoVerificadorEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
