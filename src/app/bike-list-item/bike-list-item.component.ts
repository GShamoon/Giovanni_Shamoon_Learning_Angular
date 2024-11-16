import {Component, Input} from '@angular/core';
import {Motorcycles} from "../Shared/Modules/motorcycles";
import {DatePipe, LowerCasePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {StreetLegalPipe} from "../pipes/street-legal.pipe";

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    StreetLegalPipe
  ],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bikeListItem? : Motorcycles;
}
