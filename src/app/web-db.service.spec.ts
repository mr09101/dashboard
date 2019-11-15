import { TestBed } from '@angular/core/testing';

import { WebDbService } from './web-db.service';

describe('WebDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebDbService = TestBed.get(WebDbService);
    expect(service).toBeTruthy();
  });
});
