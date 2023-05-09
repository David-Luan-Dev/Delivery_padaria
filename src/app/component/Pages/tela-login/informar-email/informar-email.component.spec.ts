import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarEmailComponent } from './informar-email.component';

describe('InformarEmailComponent', () => {
  let component: InformarEmailComponent;
  let fixture: ComponentFixture<InformarEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformarEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformarEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
