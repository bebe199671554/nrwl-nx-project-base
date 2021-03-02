import { TestBed } from '@angular/core/testing';

import { FaceMaskService } from './face-mask.service';

describe('FaceMaskService', () => {
  let service: FaceMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
