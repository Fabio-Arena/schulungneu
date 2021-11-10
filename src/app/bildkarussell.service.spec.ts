import { TestBed } from '@angular/core/testing';

import { BildkarussellService } from './bildkarussell.service';

describe('BildkarussellService', () => {
  let service: BildkarussellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BildkarussellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
