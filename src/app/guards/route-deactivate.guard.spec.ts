import { TestBed } from '@angular/core/testing';

import { RouteDeactivateGuard } from './route-deactivate.guard';

describe('RouteDeactivateGuard', () => {
  let guard: RouteDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
