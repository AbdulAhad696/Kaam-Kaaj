import { TestBed } from '@angular/core/testing';

import { CustomerLandingPageService } from './customer-landing-page.service';

describe('CustomerLandingPageService', () => {
  let service: CustomerLandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerLandingPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
