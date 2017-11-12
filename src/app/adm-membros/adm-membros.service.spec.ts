import { TestBed, inject } from '@angular/core/testing';

import { AdmMembrosService } from './adm-membros.service';

describe('AdmMembrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmMembrosService]
    });
  });

  it('should be created', inject([AdmMembrosService], (service: AdmMembrosService) => {
    expect(service).toBeTruthy();
  }));
});
