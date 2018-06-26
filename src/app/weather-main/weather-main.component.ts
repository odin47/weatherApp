import { Component, OnInit } from '@angular/core';
import { GetWeatherServiceService } from '../get-weather-service.service';
import { Observable } from 'Rxjs';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  public weatherData: Observable<any>;

  constructor(private weather: GetWeatherServiceService) { }

  ngOnInit() {

// this.weather.getWeatherData().subscribe( data => {this.weatherData = data;
//     console.log(this.weatherData);
//   });

this.weatherData = this.weather.getWeatherData();
console.log(this.weatherData);

  }

}
