import { TestBed } from '@angular/core/testing';

import { MonedaVolumenService } from './monedavolumen.service';

describe('MonedaVolumen', () => {
  let service: MonedaVolumenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonedaVolumenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
