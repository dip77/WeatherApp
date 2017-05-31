
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class WeatherProvider
{	

	  OpenWeatherAppKey = "8e6013cb067b1b522fca7848d77b426f";
	
		
	 queryString :string;
       
	constructor(private http:Http)
	{


	}
	getDataByCity(city)

	{

		this.queryString= 'http://api.openweathermap.org/data/2.5/weather?q='
        + city + ',in&appid=' + this.OpenWeatherAppKey + '&units=imperial';
		return this.http.get(this.queryString)
		.map(res => res.json());
	}
	getDataByLocation(lon:number,lat:number)

	{
		
		this.queryString= 'http://api.openweathermap.org/data/2.5/weather?lat='
        +lat+"&lon="+lon 
         + '&appid=' + this.OpenWeatherAppKey + '&units=imperial';
		return this.http.get(this.queryString)
		.map(res => res.json()).toPromise();
	}



}