/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArlertifyService } from './arlertify.service';

describe('Service: Arlertify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArlertifyService]
    });
  });

  it('should ...', inject([ArlertifyService], (service: ArlertifyService) => {
    expect(service).toBeTruthy();
  }));
});
