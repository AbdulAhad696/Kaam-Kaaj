import { TestBed } from '@angular/core/testing';

import { ServiceProviderProfileService } from './service-provider-profile.service';

describe('ServiceProviderProfileService', () => {
  let service: ServiceProviderProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProviderProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
