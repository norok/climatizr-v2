export class GeoLocation {
  constructor(
    private latitude:number,
    private longitude:number
  ) {}

  private get(param:string):any {
    return this[param];
  }

  public getLatitude():number {
    return this.get('latitude');
  }

  public getLongitude():number {
    return this.get('longitude');
  }
}
