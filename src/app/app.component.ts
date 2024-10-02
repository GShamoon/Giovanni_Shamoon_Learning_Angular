import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Motorcycles} from "./Shared/Modules/motorcycles";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {BikeListComponent} from "./bike-list/bike-list.component";
import {BikeListItemComponent} from "./bike-list-item/bike-list-item.component";
import {MotorcycleService} from "./motorcycle.service";
import {bikeList} from "./Shared/mock-motorcycles";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, NgIf, BikeListComponent, BikeListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private motorcycleService: MotorcycleService) {
  }

  bike: Motorcycles | undefined;

  ngOnInit(): void {
    this.motorcycleService.getBikeById(7).subscribe((bike) => {
      this.bike = bike
    })
  }
  // title = 'Assignment 2';
  // bike1: Motorcycles = {id: 1, make: "Ducati", model: "Panigale V4", year: 2020, streetLegal: true};
  // bike2: Motorcycles = {id: 2, make: "Yamaha", model: "R6", year: 2006, streetLegal: true};
  // bike3: Motorcycles = {id: 3, make: "BMW", model: "K75", year: 1991, streetLegal: true};
  // bike4: Motorcycles = {id: 4, make: "Kawasaki", model: "Ninja H2R", year: 2016, streetLegal: false};
  // bike5: Motorcycles = {id: 5, make: "Trident", model: "Trident 660", year: 2023, streetLegal: true};
  // bike6: Motorcycles = {id: 6, make: "Aprilia", model: "RSV4 RR", year: 2024, streetLegal: true};
  // bike7: Motorcycles = {id: 7, make: "Arch", model: "Method143", year: 2025, streetLegal: false};
  // //any[] would have worked as well
  // bikeList: Motorcycles[] = [this.bike1, this.bike2, this.bike3, this.bike4, this.bike5, this.bike6, this.bike7];
  protected readonly MotorcycleService = MotorcycleService;
}
