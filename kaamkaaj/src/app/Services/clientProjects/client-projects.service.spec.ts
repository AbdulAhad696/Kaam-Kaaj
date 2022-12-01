import { TestBed } from '@angular/core/testing';

import { ClientProjectsService } from './client-projects.service';

describe('ClientProjectsService', () => {
  let service: ClientProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
