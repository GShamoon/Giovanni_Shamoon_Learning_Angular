import {Component, Input} from '@angular/core';
import {Motorcycles} from "../Shared/Modules/motorcycles";
import {DatePipe, LowerCasePipe, NgIf, NgOptimizedImage, NgStyle, UpperCasePipe} from "@angular/common";
import {StreetLegalPipe} from "../pipes/street-legal.pipe";
import {ColorChangePipe} from "../pipes/color-change.pipe";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatBadgeModule} from "@angular/material/badge";

@Component({
  selector: 'app-bike-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    StreetLegalPipe,
    ColorChangePipe,
    NgStyle,
    MatButtonModule,
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule,
    MatBadgeModule
  ],
  templateUrl: './bike-list-item.component.html',
  styleUrl: './bike-list-item.component.css'
})
export class BikeListItemComponent {
  @Input() bikeListItem? : Motorcycles;
}
