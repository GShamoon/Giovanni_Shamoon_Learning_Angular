import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MotorcycleService} from "../motorcycle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modify-bike',
  standalone: true,
  imports: [
    ReactiveFormsModule
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
}
