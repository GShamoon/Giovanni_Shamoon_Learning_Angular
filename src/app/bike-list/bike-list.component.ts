import { Component } from '@angular/core';
import {Motorcycles} from "../Shared/Modules/motorcycles";
import {BikeListItemComponent} from "../bike-list-item/bike-list-item.component";

@Component({
  selector: 'app-bike-list',
  standalone: true,
  imports: [
    BikeListItemComponent
  ],
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css'
})
export class BikeListComponent {
  bike4: Motorcycles = {id: 4, make: "Kawasaki", model: "Ninja H2R", year: 2016, streetLegal: false};
  bike5: Motorcycles = {id: 5, make: "Trident", model: "Trident 660", year: 2023, streetLegal: true};
  bike6: Motorcycles = {id: 6, make: "Aprilia", model: "RSV4 RR", year: 2024, streetLegal: true};
  bike7: Motorcycles = {id: 7, make: "Arch", model: "Method143", year: 2025, streetLegal: false};
  bikeList: Motorcycles [] = [this.bike4, this.bike5, this.bike6, this.bike7];
}
