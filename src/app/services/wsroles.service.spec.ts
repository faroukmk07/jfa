import { TestBed } from '@angular/core/testing';

import { WsrolesService } from './wsroles.service';

describe('WsrolesService', () => {
  let service: WsrolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsrolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
