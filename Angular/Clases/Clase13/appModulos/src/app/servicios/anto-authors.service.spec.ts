import { TestBed } from '@angular/core/testing';

import { AntoAuthorsService } from './anto-authors.service';

describe('AntoAuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntoAuthorsService = TestBed.get(AntoAuthorsService);
    expect(service).toBeTruthy();
  });
});
