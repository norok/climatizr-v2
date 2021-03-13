import { TestBed } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';

describe('LocalstorageService', () => {
  let service: LocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService]
    });

    service = TestBed.inject(LocalstorageService);
  });

  afterEach(() => {
    window.localStorage.clear();
  })

  it('should set a value on localStorage with setData and be able to get it with getData', () => {
    expect(service).toBeTruthy();

    service.setData('data1', 'value1');

    expect(window.localStorage.getItem('data1')).toEqual('value1');
    expect(service.getData('data1')).toEqual('value1');
  });

  it('should set a JSON value on localStorage with setJSONData and be able to get it with getJSONData', () => {
    expect(service).toBeTruthy();

    service.setJSONData('data2', {v2: 'v2a'});

    expect(window.localStorage.getItem('data2')).toEqual('{"v2":"v2a"}');
    expect(service.getJSONData('data2')).toEqual({v2: 'v2a'});
  });
});
