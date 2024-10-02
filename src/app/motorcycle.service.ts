import { Injectable } from '@angular/core';
import {Motorcycles} from "./Shared/Modules/motorcycles";
import {bikeList} from "./Shared/mock-motorcycles";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private bikeList: Motorcycles[] = bikeList;
  constructor() { }

  getBikeList(): Observable<Motorcycles[]>{
    return of(bikeList)
  }
}
