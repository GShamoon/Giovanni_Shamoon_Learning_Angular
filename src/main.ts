import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {BikeListComponent} from "./app/bike-list/bike-list.component";
import {BikeListItemComponent} from "./app/bike-list-item/bike-list-item.component";
import {provideRouter, Routes} from "@angular/router";
import {ModifyBikeComponent} from "./app/modify-bike/modify-bike.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
const routes: Routes = [
  {path:'', redirectTo: '/bikes', pathMatch: 'full'}, //default route
  { path: 'bikes', component: BikeListComponent },
  { path: 'bikes/:id', loadComponent: () => import('./app/bike-list-item/bike-list-item.component').then(m=>m.BikeListItemComponent)},
  { path: 'modify-bike', loadComponent: () => import('./app/modify-bike/modify-bike.component').then(m=>m.ModifyBikeComponent)},
  { path: '**', loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)}]

bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]})
  .catch((err) => console.error(err));
