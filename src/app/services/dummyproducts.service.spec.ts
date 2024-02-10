import { TestBed } from '@angular/core/testing';

import { DummyproductsService } from './dummyproducts.service';

describe('DummyproductsService', () => {
  let service: DummyproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
