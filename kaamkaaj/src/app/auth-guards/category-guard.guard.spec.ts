import { TestBed } from '@angular/core/testing';

import { CategoryGuardGuard } from './category-guard.guard';

describe('CategoryGuardGuard', () => {
  let guard: CategoryGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CategoryGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
