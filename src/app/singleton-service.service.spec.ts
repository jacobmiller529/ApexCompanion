import { TestBed } from '@angular/core/testing';

import { SingletonServiceService } from './singleton-service.service';

describe('SingletonServiceService', () => {
  let service: SingletonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
