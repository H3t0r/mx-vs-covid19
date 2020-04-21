import { TestBed } from '@angular/core/testing';

import { Covid19APIService } from './covid19-api.service';

describe('Covid19APIService', () => {
  let service: Covid19APIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19APIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
