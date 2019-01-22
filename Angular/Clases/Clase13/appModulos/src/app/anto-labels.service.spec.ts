import { TestBed } from '@angular/core/testing';

import { AntoLabelsService } from './anto-labels.service';

describe('AntoLabelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntoLabelsService = TestBed.get(AntoLabelsService);
    expect(service).toBeTruthy();
  });
});
