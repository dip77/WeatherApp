import { Component} from '@angular/core';
import  {WeatherProvider} from '../provider/Weather'
import { NavController } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

	
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[WeatherProvider,Geolocation]
})
export class HomePage {

    location:boolean;
    showHi:boolean;
  city:string;
  temperatureMax:number;
  temperatureMin:number;
  wind:number;
  humidity:number;
  visibility:string;
  lon:number;
  lat:number;
  	
  constructor(private geolocation:Geolocation ,public navCtrl: NavController,private weatherProvider:WeatherProvider)
{


      this.geolocation.getCurrentPosition().then(res =>function() {
      
        console.log(res);
      this.lon=res.coords.longitude;
      this.lat=res.coords.latitude;
     
   
    })
    .catch(error =>
     function()
     {
       this.location=false;
       console.log("error occured");
     }  );

    
  if( this.geolocation!=null)
  {

      this.geolocation.getCurrentPosition().
      then(res=>  
         this.weatherProvider.getDataByLocation(res.coords.longitude,res.coords.latitude)         
         .then(result => 
         {
            this.city=result.name;
            this.temperatureMax=(result.main.temp_max-32)/1.8;
            this.temperatureMin=(result.main.temp_min-32)/1.8;
            this.wind=result.wind.speed;
            this.humidity=result.main.humidity;
            this.visibility=result.weather[0].main;
            this.showHi=true;
       
    }).catch(error => console.log(error))


);
    

  }
}
    show(city)
  {
   

   	this.weatherProvider.getDataByCity(city).subscribe(
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
