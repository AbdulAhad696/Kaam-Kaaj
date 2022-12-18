import { TestBed } from '@angular/core/testing';

import { SubmitJobByWorkerService } from './submit-job-by-worker.service';

describe('SubmitJobByWorkerService', () => {
  let service: SubmitJobByWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitJobByWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
