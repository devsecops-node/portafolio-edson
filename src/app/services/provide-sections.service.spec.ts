import { TestBed } from '@angular/core/testing';

import { ProvideSectionsService } from './provide-sections.service';

describe('ProvideSectionsService', () => {
  let service: ProvideSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvideSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
