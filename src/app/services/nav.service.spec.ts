import { TestBed } from '@angular/core/testing';

import { NavService } from './nav.service';

describe('NavService', () => {
  let service: NavService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavService]
    });

    service = TestBed.inject(NavService);
  });

  it('should dispatch the city and federative unit change to the navItem$ observable', done => {
    expect(service).toBeTruthy();

    const city1 = 'Campinas';
    const state1 = 'SP';

    service.navItem$.subscribe( data => {
      expect(data).toEqual({
        city: city1,
        state: state1
      });

      done();
    });

    service.changeCity(city1, state1);
  });
});
