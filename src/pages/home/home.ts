import { Component} from '@angular/core';
import  {WeatherProvider} from '../provider/Weather'
import { NavController } from 'ionic-angular';
	
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[WeatherProvider]
})
export class HomePage {

  
    showHi:boolean;
  city:string;
  temperatureMax:number;
  temperatureMin:number;
  wind:number;
  humidity:number;
  visibility:string;
  	
  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider)
{

}
    show(city)
  {
    
      	
  	this.weatherProvider.getData(city).subscribe(
      result => {
      this.city=result.name;
      console.log(result);
      this.temperatureMax=(result.main.temp_max-32)/1.8;
      this.temperatureMin=(result.main.temp_min-32)/1.8;
      this.wind=result.wind.speed;
      this.humidity=result.main.humidity;
      this.visibility=result.weather[0].main;
      this.showHi=true;
       
    });

  }

}
