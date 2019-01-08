import { TestBed } from '@angular/core/testing';

import { PelasAuthService } from './pelas-auth.service';

describe('PelasAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PelasAuthService = TestBed.get(PelasAuthService);
    expect(service).toBeTruthy();
  });
});
