import { TestBed } from '@angular/core/testing';

import { CapacitorstorageService } from './capacitorstorage.service';

describe('CapacitorstorageService', () => {
  let service: CapacitorstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapacitorstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
