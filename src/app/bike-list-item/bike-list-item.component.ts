import {Component, Input} from '@angular/core';
import {Motorcycles} from "../Shared/Models/motorcycles";

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bikeListItem? : Motorcycles;
}
