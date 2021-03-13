import { TestBed } from '@angular/core/testing';

import { IconsService } from './icons.service';

describe('NavService', () => {
  let service: IconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconsService]
    });

    service = TestBed.inject(IconsService);
  });

  it('should return a "translated" icon value', () => {
    expect(service).toBeTruthy();

    expect(service.getIcon('01d')).toEqual('clear-day');
  });
});
