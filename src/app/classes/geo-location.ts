export class GeoLocation {
  constructor(
    private latitude:number,
    private longitude:number
  ) {}

  public getLatitude():string {
    return this.latitude.toString();
  }

  public getLongitude():string {
    return this.longitude.toString();
  }
}
