import { TestBed } from '@angular/core/testing';

import { FetchCatsService } from './fetch-cats.service';

describe('FetchCatsService', () => {
  let service: FetchCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
