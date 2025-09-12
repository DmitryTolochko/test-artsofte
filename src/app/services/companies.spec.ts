import { TestBed } from '@angular/core/testing';

import { CompaniesService } from './companies';

describe('Companies', () => {
  let service: CompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
