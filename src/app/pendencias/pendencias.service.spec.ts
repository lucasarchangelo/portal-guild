import { TestBed, inject } from '@angular/core/testing';

import { PendenciasService } from './pendencias.service';

describe('PendenciasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendenciasService]
    });
  });

  it('should be created', inject([PendenciasService], (service: PendenciasService) => {
    expect(service).toBeTruthy();
  }));
});
