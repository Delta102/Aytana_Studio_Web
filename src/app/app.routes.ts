import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { HomeComponent } from './components/home/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },

];
