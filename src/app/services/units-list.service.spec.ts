import { TestBed } from '@angular/core/testing';

import { UnitsListService } from './units-list.service';

describe('UnitsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitsListService = TestBed.get(UnitsListService);
    expect(service).toBeTruthy();
  });
});
