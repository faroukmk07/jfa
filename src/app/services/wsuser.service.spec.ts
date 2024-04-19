import { TestBed } from '@angular/core/testing';

import { WsuserService } from './wsuser.service';

describe('WsuserService', () => {
  let service: WsuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
