import { TestBed } from '@angular/core/testing';

import { CestaComunicacaoServiceService } from './cesta-comunicacao-service.service';

describe('CestaComunicacaoServiceService', () => {
  let service: CestaComunicacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestaComunicacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
