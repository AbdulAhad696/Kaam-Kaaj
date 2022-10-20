import { TestBed } from '@angular/core/testing';

import { ViewjobService } from './viewjob.service';

describe('ViewjobService', () => {
  let service: ViewjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
