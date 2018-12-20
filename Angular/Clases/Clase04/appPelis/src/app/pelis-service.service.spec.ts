import { TestBed } from '@angular/core/testing';

import { PelisServiceService } from './pelis-service.service';

describe('PelisServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PelisServiceService = TestBed.get(PelisServiceService);
    expect(service).toBeTruthy();
  });
});
