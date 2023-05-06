import { TestBed } from '@angular/core/testing';

import { JockesApiService } from './jockes-api.service';

describe('JockesApiService', () => {
  let service: JockesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JockesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
