import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService]
    });

    service = TestBed.inject(LoaderService);
  });

  it('should set to true when startLoader is called', done => {
    expect(service).toBeTruthy();

    service.loaderItem$.subscribe( data => {
      expect(data).toBeTrue();

      expect(service.getStatus()).toBeTrue();

      done();
    });

    service.startLoader();
  });

  it('should set to false when startLoader is called', done => {
    expect(service).toBeTruthy();

    service.loaderItem$.subscribe( data => {
      expect(data).toBeFalse();

      expect(service.getStatus()).toBeFalse();

      done();
    });

    service.endLoader();
  });
});
