import { TestBed, inject } from '@angular/core/testing';

import { AdmJogosService } from './adm-jogos.service';

describe('AdmJogosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmJogosService]
    });
  });

  it('should be created', inject([AdmJogosService], (service: AdmJogosService) => {
    expect(service).toBeTruthy();
  }));
});
