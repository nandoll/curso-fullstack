import { TestBed, async, inject } from '@angular/core/testing';

import { AntoAuthorizationGuard } from './anto-authorization.guard';

describe('AntoAuthorizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntoAuthorizationGuard]
    });
  });

  it('should ...', inject([AntoAuthorizationGuard], (guard: AntoAuthorizationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
