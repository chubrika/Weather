import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UvComponent } from './uv/uv.component';

const routes: Routes = [
  {
    path: 'forecast',
    component: ForecastComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'currentWeather',
    component: CurrentWeatherComponent,
  },
  {
    path: 'uv',
    component: UvComponent,
  }
  
];

@NgModule({

  imports: [
      RouterModule.forRoot(routes)
  ],
  
  exports: [
      RouterModule
  ],
})
export class AppRoutingModule { }