import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaParceiraComponent } from './entrega-parceira.component';

describe('EntregaParceiraComponent', () => {
  let component: EntregaParceiraComponent;
  let fixture: ComponentFixture<EntregaParceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaParceiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntregaParceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
