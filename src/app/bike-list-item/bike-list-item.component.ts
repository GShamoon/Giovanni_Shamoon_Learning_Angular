import {Component, Input} from '@angular/core';
import {Motorcycles} from "../Shared/Modules/motorcycles";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bikeListItem? : Motorcycles;
}
