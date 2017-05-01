import { TestBed, inject } from '@angular/core/testing';

import { CitiesStatesService } from './cities-states.service';

describe('CitiesStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesStatesService]
    });
  });

  it('should ...', inject([CitiesStatesService], (service: CitiesStatesService) => {
    expect(service).toBeTruthy();
  }));
});
