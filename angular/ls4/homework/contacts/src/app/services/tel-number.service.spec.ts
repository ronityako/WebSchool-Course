import { TestBed } from '@angular/core/testing';

import { TelNumberService } from './tel-number.service';

describe('TelNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelNumberService = TestBed.get(TelNumberService);
    expect(service).toBeTruthy();
  });
});
