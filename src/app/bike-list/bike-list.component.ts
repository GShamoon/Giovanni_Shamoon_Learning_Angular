import { Component } from '@angular/core';
import {Motorcycles} from "../Shared/Modules/motorcycles";
import {BikeListItemComponent} from "../bike-list-item/bike-list-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MotorcycleService} from "../motorcycle.service";
import {Router, RouterLink} from "@angular/router";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-bike-list',
  standalone: true,
  imports: [
    BikeListItemComponent, NgForOf, NgIf, NgClass, RouterLink, HoverHighlightDirective, MatButtonToggleModule, MatButtonModule, MatTooltipModule, MatCheckboxModule, MatRadioModule, MatBadgeModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './bike-list.component.html',
  styleUrl: './bike-list.component.css'
})
export class BikeListComponent {
  bikeList: Motorcycles [] = [];
  constructor(private motorcycleService: MotorcycleService,
              private router:Router) {
  }

  ngOnInit(){
    this.motorcycleService.getBikeList().subscribe({
      next: (data: Motorcycles[]) => this.bikeList = data,
      error: err => console.error("There was an error fetching Motorcycles"),
      complete: () => console.log("Motorcycle data fetch complete")
    })
  }

  selectedBike?: Motorcycles;
  activeClass?: boolean = false;

  selectBike(bike: Motorcycles){
    this.selectedBike = bike;
    this.activeClass = !this.activeClass;
  }

  onEdit(){
    this.router.navigate(["modify-bike"])
  }

  onDelete(){
    if (this.selectedBike != null){
      this.motorcycleService.deleteBike(this.selectedBike.id);
      this.bikeList = this.bikeList.filter(bike=>bike.id !== this.selectedBike?.id);
    }
  }
  // bike4: Motorcycles = {id: 4, make: "Kawasaki", model: "Ninja H2R", year: 2016, streetLegal: false};
  // bike5: Motorcycles = {id: 5, make: "Trident", model: "Trident 660", year: 2023, streetLegal: true};
  // bike6: Motorcycles = {id: 6, make: "Aprilia", model: "RSV4 RR", year: 2024, streetLegal: true};
  // bike7: Motorcycles = {id: 7, make: "Arch", model: "Method143", year: 2025, streetLegal: false};
  // bikeList: Motorcycles [] = [this.bike4, this.bike5, this.bike6, this.bike7];
}
