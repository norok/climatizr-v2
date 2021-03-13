import { Injectable } from "@angular/core";

enum eIcons {
  '01d' = 'clear-day',
  '01n' = 'clear-night',
  '02d' = 'partly-cloudy-day',
  '02n' = 'partly-cloudy-night',
  '03d' = 'cloudy',
  '03n' = 'cloudy',
  '04d' = 'cloudy',
  '04n' = 'cloudy',
  '09d' = 'rain',
  '09n' = 'rain',
  '10d' = 'rain',
  '10n' = 'rain',
  '11d' = 'sleet',
  '11n' = 'sleet',
  '13d' = 'snow',
  '13n' = 'snow',
  '50d' = 'fog',
  '50n' = 'fog',
}

@Injectable()
export class IconsService {
  public getIcon(code: string): string {
    return eIcons[code];
  }
}
