import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeEmailComponent } from './informe-email.component';

describe('InformeEmailComponent', () => {
  let component: InformeEmailComponent;
  let fixture: ComponentFixture<InformeEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
