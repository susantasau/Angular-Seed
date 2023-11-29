import { Component, Input } from '@angular/core';
import { CityInfo } from './CityInfo';

@Component({
  selector: 'msg-child',
  templateUrl: './Child.component.html',
  styleUrls: ['./Child.component.css'],
})
export class MsgChild {
  @Input() city!: string;
  touristPlaces!: string[];

  info: CityInfo[] = [
    new CityInfo('Pune', [
      'Shanivarwada',
      'University',
      'Shinghad',
      'Parvatihills',
      'Khadakvasla',
    ]),
    new CityInfo('Mumbai', [
      'Gateway of India',
      'Marine drive',
      'Film city',
      'Juhu beach',
      'Planetorium',
    ]),
    new CityInfo('Jaipur', [
      'Palace',
      'Amber fort',
      'Hawa Mahal',
      'Garden',
      'Jantar Mantar',
    ]),
  ];

  OnBtnClick(): void {
    for (let i of this.info) {
      if (this.city == i.cityName) {
        this.touristPlaces = i.touristSpot;
      }
    }
  }
}
