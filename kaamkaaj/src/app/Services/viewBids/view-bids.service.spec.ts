import { TestBed } from '@angular/core/testing';

import { ViewBidsService } from './view-bids.service';

describe('ViewBidsService', () => {
  let service: ViewBidsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBidsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
