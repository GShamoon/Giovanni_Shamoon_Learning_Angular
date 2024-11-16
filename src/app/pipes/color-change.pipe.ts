import { Pipe, PipeTransform } from '@angular/core';
import {Motorcycles} from "../Shared/Modules/motorcycles";

@Pipe({
  name: 'colorChange',
  standalone: true
})
export class ColorChangePipe implements PipeTransform {

  transform(bike: Motorcycles): string {
    if (bike.streetLegal){
      return "blue"
    } else {
      return "red"
    }
  }

}
