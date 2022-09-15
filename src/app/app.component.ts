import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name!: String;
  selection!: String;
  title = 'Día 8 del reto :V';
  cities = [
    { name: 'Barcelona', country: '' },
    { name: 'Madrid', country: 'Spain' },
    { name: 'Lima', country: 'Peru' },
  ];
  imgUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  imgAlt = 'Logo de Angular';

  onCityClicked(cityName: String): void {
    this.selection = cityName;
  }
  onClear(): void {
    this.selection = '';
  }
}
