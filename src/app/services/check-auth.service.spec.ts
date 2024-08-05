import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './check-auth.service';

describe('CheckAuthService', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
