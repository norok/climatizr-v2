import { City } from './city';

export class State {
  constructor(
    private name:string,
    private abbr:string,
    private cities:City[]
  ) {}

  public getCities():City[] {
    return this.cities;
  }

  public getName():string {
    return this.name;
  }

  public getAbbr():string {
    return this.abbr;
  }
}
