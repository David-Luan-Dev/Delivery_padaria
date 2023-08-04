import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeCodigoEmailComponent } from './informe-codigo-email.component';

describe('InformeCodigoEmailComponent', () => {
  let component: InformeCodigoEmailComponent;
  let fixture: ComponentFixture<InformeCodigoEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeCodigoEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeCodigoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
