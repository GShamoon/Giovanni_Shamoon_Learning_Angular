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
  getBikeById(bikeId: number): Observable<Motorcycles | undefined>{
    const bike = this.bikeList.find(bike => bike.id === bikeId);
    return of(bike)
  }
  createBike(newBike: Motorcycles) : Observable<Motorcycles []>{
    this.bikeList.push(newBike)
    return of(this.bikeList);
  }
  updateBike(updatedBike: Motorcycles): Observable<Motorcycles[]> {
    const index = this.bikeList.findIndex(bike => bike.id === updatedBike.id);
    if (index !== -1) {
      this.bikeList[index] = updatedBike;
    }
    return of(this.bikeList);
  }
  deleteBike(bikeId: number): Observable<Motorcycles[]> {
    this.bikeList = this.bikeList.filter(bike => bike.id !== bikeId);
    return of(this.bikeList);
  }
}
