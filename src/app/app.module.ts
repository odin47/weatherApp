import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetWeatherServiceService } from './get-weather-service.service';
import { AppComponent } from './app.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetWeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
