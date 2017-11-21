import { TestBed, inject } from '@angular/core/testing';

import { AdmEventosService } from './adm-eventos.service';

describe('AdmEventosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmEventosService]
    });
  });

  it('should be created', inject([AdmEventosService], (service: AdmEventosService) => {
    expect(service).toBeTruthy();
  }));
});
