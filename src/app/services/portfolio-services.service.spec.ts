import { TestBed } from '@angular/core/testing';

import { PortfolioServicesService } from './portfolio-services.service';

describe('PortfolioServicesService', () => {
  let service: PortfolioServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
