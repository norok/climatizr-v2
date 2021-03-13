import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class LoaderService {
  private _loaderItemSource = new Subject<Boolean>();
  private loaderStatus = true;

  public loaderItem$ = this._loaderItemSource.asObservable();

  constructor() {}

  private trigger():void {
    this._loaderItemSource
      .next(this.getStatus());
  }

  public endLoader():void {
    this.loaderStatus = false;
    this.trigger();
  }

  public startLoader():void {
    this.loaderStatus = true;
    this.trigger();
  }

  public getStatus():Boolean {
    return this.loaderStatus;
  }

}
