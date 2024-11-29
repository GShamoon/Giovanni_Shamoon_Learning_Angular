import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MotorcycleService} from "../motorcycle.service";
import {Router} from "@angular/router";
import {Motorcycles} from "../Shared/Modules/motorcycles";
import {FocusStyleDirective} from "../directives/focus-style.directive";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-modify-bike',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FocusStyleDirective,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './modify-bike.component.html',
  styleUrl: './modify-bike.component.css'
})
export class ModifyBikeComponent {
  bikeForm: FormGroup;
  constructor(private fb: FormBuilder,
              private MotorcycleService:MotorcycleService, private router:Router) {
    this.bikeForm = this.fb.group({
      id: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      streetLegal: [false]
    });
  }

  onAdd(){
    const bike: Motorcycles = this.bikeForm.value;
    this.MotorcycleService.createBike(bike);
    this.router.navigate(['/bikes'])
  }

  onUpdate(){
    const bike: Motorcycles = this.bikeForm.value;
    if (bike.id){
      this.MotorcycleService.updateBike(bike)
      this.router.navigate(['/bikes'])
    }
  }
}
