import { TestBed, inject } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';

describe('LocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService]
    });
  });

  it('should ...', inject([LocalstorageService], (service: LocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
