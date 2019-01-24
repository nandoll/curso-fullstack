import { TestBed, async, inject } from '@angular/core/testing';

import { AntoAutentitationGuard } from './anto-autentitation.guard';

describe('AntoAutentitationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntoAutentitationGuard]
    });
  });

  it('should ...', inject([AntoAutentitationGuard], (guard: AntoAutentitationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
