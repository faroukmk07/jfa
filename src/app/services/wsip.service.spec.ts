import { TestBed } from '@angular/core/testing';

import { WsipService } from './wsip.service';

describe('WsipService', () => {
  let service: WsipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
