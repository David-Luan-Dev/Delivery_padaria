import { TestBed } from '@angular/core/testing';

import { ServicoCompartilhadoService } from './servico-compartilhado.service';

describe('ServicoCompartilhadoService', () => {
  let service: ServicoCompartilhadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoCompartilhadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
