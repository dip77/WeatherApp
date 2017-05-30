import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

	
	 var OpenWeatherAppKey = "8e6013cb067b1b522fca7848d77b426f";

	 	
        function  getData(city:string)
        
        {
        	this.http=new Http(null,null);
        	console.log("call data");
        	let url:string='http://api.openweathermap.org/data/2.5/weather?q='+city+
        +   '&appid=' + this.OpenWeatherAppKey + '&units=imperial';
        	return this.http.get(url)
  			.toPromise()
  			.then(this.extractData)
  			.catch(this.handleError);
        }
       function extractData()
        {
        		console.log("called")
        }

