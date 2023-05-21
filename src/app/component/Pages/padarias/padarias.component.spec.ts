import { ComponentFixture, TestBed } from '@angular/core/testing';

import PadariasComponent from './padarias.component';

describe('PadariasComponent', () => {
  let component: PadariasComponent;
  let fixture: ComponentFixture<PadariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadariasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
