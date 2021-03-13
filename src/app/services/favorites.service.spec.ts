import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs-compat';
import { LocalstorageService } from './localstorage.service';
import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoritesService,
        LocalstorageService
      ]
    });

    service = TestBed.inject(FavoritesService);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    })
  });

  afterEach(() => {
    scheduler.flush();
    window.localStorage.removeItem('favoriteCities');
  })

  it('should return an empty array if there are no favorites.', () => {
    expect(service.getFavorites()).toEqual([]);
  });

  it('should be able to add a favorite city and the observable should trigger.', done => {
    const expectedObservable = service.favoritedItem$;

    scheduler.run(({expectObservable, cold}) => {
      cold('-a-b|', {
        a: {city: 'Campinas', state: 'SP'},
        b: {city: 'São Paulo', state: 'SP'},
      }).subscribe({
        next: fav => {
          service.addCity(fav.city, fav.state);
        },
        complete: () => {
          expect(service.getFavorites()).toEqual([
            { city: 'Campinas', state: 'SP' },
            { city: 'São Paulo', state: 'SP' },
          ]);

          done();
        }
      });

      expectObservable(expectedObservable).toBe('-a-b', {
        a: true,
        b: true
      });
    });
  });

  it('shouldn\'t be able to add the same favorite city twice.', done => {
    const expectedObservable = service.favoritedItem$;

    scheduler.run(({expectObservable, cold}) => {
      cold('-a-b-c|', {
        a: {city: 'Campinas', state: 'SP'},
        b: {city: 'São Paulo', state: 'SP'},
        c: {city: 'Campinas', state: 'SP'},
      }).subscribe({
        next: fav => {
          service.addCity(fav.city, fav.state);
        },
        complete: () => {
          expect(service.getFavorites()).toEqual([
            { city: 'Campinas', state: 'SP' },
            { city: 'São Paulo', state: 'SP' },
          ]);

          done();
        }
      });

      expectObservable(expectedObservable).toBe('-a-b-c', {
        a: true,
        b: true,
        c: true
      });
    });
  });

  it('should be able to add and remove a favorite city and the observable should trigger.', () => {
    const expectedObservable = service.favoritedItem$;

    scheduler.run(({expectObservable, cold}) => {
      let i = 1;

      cold('-a-b-c|', {
        a: {city: 'Campinas', state: 'SP'},
        b: {city: 'Extrema', state: 'MG'},
        c: {city: 'Campinas', state: 'SP'},
      }).subscribe({
        next: fav => {
          if (i < 3) {
            service.addCity(fav.city, fav.state);
          } else {
            service.removeCity(fav.city, fav.state);
          }
          i++;
        },
        complete: () => {
          expect(service.getFavorites()).toEqual([
            { city: 'Extrema', state: 'MG' },
          ]);
        }
      });

      expectObservable(expectedObservable).toBe('-a-b-c', {
        a: true,
        b: true,
        c: true
      });
    });
  });

  it('shouldn\'t be able to remove an already removed city.', () => {
    const expectedObservable = service.favoritedItem$;

    scheduler.run(({expectObservable, cold}) => {
      let i = 1;

      cold('-a-b-c-d|', {
        a: {city: 'Campinas', state: 'SP'},
        b: {city: 'Extrema', state: 'MG'},
        c: {city: 'Campinas', state: 'SP'},
        d: {city: 'Campinas', state: 'SP'},
      }).subscribe({
        next: fav => {
          if (i < 3) {
            service.addCity(fav.city, fav.state);
          } else {
            service.removeCity(fav.city, fav.state);
          }
          i++;
        },
        complete: () => {
          expect(service.getFavorites()).toEqual([
            { city: 'Extrema', state: 'MG' },
          ]);
        }
      });

      expectObservable(expectedObservable).toBe('-a-b-c', {
        a: true,
        b: true,
        c: true
      });
    });
  });
});
