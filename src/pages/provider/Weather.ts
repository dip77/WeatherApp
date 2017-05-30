
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider
{	

	  OpenWeatherAppKey = "8e6013cb067b1b522fca7848d77b426f";
	
		
	 queryString :string;
       
	constructor(private http:Http)
	{


	}
	getData(city)

	{

		this.queryString= 'http://api.openweathermap.org/data/2.5/weather?q='
        + city + ',in&appid=' + this.OpenWeatherAppKey + '&units=imperial';
		return this.http.get(this.queryString)
		.map(res => res.json());
	}



}