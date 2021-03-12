import { State } from './../classes/state';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CitiesStatesService } from './cities-states.service';
import { City } from 'app/classes/city';

describe('CitiesStatesService', () => {
  let service: CitiesStatesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitiesStatesService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CitiesStatesService);
  });

  it('should retrieve cities and federative units list', () => {
    const testData: any = {
      estados: [
        {
          sigla: "AC",
          nome: "Acre",
          cidades: [
            "Acrelândia",
            "Assis Brasil",
          ]
        },
        {
          sigla: "CE",
          nome: "Ceará",
          cidades: [
            "Abaiara",
            "Acarapé",
          ]
        },
      ]
    };

    expect(service).toBeTruthy();
    service.getLocations().subscribe(data => {
      expect(data).toEqual([
        new State('Acre', 'AC', [
          new City('Acrelândia'),
          new City('Assis Brasil'),
        ]),
        new State('Ceará', 'CE', [
          new City('Abaiara'),
          new City('Acarapé'),
        ]),
      ]);
    });

    const req = httpTestingController.expectOne('./assets/estados-cidades.json');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);

    httpTestingController.verify();
  });
});
