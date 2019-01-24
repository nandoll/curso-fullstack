import { TestBed } from '@angular/core/testing';

import { AntoBooksService } from './anto-books.service';

describe('AntoBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntoBooksService = TestBed.get(AntoBooksService);
    expect(service).toBeTruthy();
  });
});
