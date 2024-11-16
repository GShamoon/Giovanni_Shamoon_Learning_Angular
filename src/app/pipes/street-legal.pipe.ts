import { Pipe, PipeTransform } from '@angular/core';
import {Motorcycles} from "../Shared/Modules/motorcycles";

@Pipe({
  name: 'streetLegal',
  standalone: true
})
export class StreetLegalPipe implements PipeTransform {

  transform(bike: Motorcycles): string {
    if (bike.streetLegal){
      return "legal"
    } else {
      return "illegal"
    }
  }

}
