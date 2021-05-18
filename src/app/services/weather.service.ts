import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    public headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
    }
    public requestOptions = {
        headers: new HttpHeaders(this.headerDict),
    };
    constructor(private http: HttpClient) { }

    getWeather(location: any) {
        return this.http.get(
            `https://api.apixu.com/v1/current.json?key=d65a95ad3d5b337a675c8fb4656b5fde&q=` + location,
            this.requestOptions
        );
    }
}
