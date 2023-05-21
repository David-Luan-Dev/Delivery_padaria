import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaGratisComponent } from './entrega-gratis.component';

describe('EntregaGratisComponent', () => {
  let component: EntregaGratisComponent;
  let fixture: ComponentFixture<EntregaGratisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaGratisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
