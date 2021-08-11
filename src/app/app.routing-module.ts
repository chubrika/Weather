import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UvComponent } from './components/uv/uv.component';

const routes: Routes = [
  {
    path: 'forecast',
    component: ForecastComponent,
  },
  {
    path: '',
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