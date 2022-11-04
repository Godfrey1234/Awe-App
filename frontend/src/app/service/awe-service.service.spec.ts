import { TestBed } from '@angular/core/testing';

import { AweServiceService } from './awe-service.service';

describe('AweServiceService', () => {
  let service: AweServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AweServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
