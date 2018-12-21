import { TestBed } from '@angular/core/testing';

import { PeriodsStoreService } from './periods-store.service';

describe('PeriodsStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeriodsStoreService = TestBed.get(PeriodsStoreService);
    expect(service).toBeTruthy();
  });
});
