import { TestBed } from '@angular/core/testing';

import { LibFeatureService } from './lib-feature.service';

describe('LibFeatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibFeatureService = TestBed.get(LibFeatureService);
    expect(service).toBeTruthy();
  });
});
