import { TestBed } from '@angular/core/testing';

import { ViewComplaintsService } from './view-complaints.service';

describe('ViewComplaintsService', () => {
  let service: ViewComplaintsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewComplaintsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
