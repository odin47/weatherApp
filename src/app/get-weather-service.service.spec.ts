import { TestBed, inject } from '@angular/core/testing';

import { GetWeatherServiceService } from './get-weather-service.service';

describe('GetWeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWeatherServiceService]
    });
  });

  it('should be created', inject([GetWeatherServiceService], (service: GetWeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
