import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {BikeListComponent} from "./app/bike-list/bike-list.component";
import {BikeListItemComponent} from "./app/bike-list-item/bike-list-item.component";
import {provideRouter, Routes} from "@angular/router";
const routes: Routes = [
  {path:'', redirectTo: '/bikes', pathMatch: 'full'}, //default route
  { path: 'bikes', component: BikeListComponent },
  { path: 'bikes/:id', component: BikeListItemComponent }]

bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]})
  .catch((err) => console.error(err));
