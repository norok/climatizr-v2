import { OnInit, Directive } from '@angular/core';
declare var Skycons:any;

@Directive()
export class WeatherBlock implements OnInit {
  protected skycons:any;

  ngOnInit() {
    this.skycons = new Skycons({"color": "#FFF"});
  }

  protected setIcon(id:string, iconId:string):void {
    if (!id || !iconId) return;

    this.skycons.set(id, iconId);
    this.skycons.play();
  }
}
