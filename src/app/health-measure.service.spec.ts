import { TestBed } from '@angular/core/testing';

import { HealthMeasureService } from './health-measure.service';

describe('HealthMeasureService', () => {
  let service: HealthMeasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthMeasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
