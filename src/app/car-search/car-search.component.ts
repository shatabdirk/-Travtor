import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { driverAge } from './driver-age';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  constructor(private fromBuilder: FormBuilder, private router: Router, private carService: CarService) { }

  carSearchFrom!: FormGroup;

  diverAgerList = driverAge;

  ngOnInit(): void {
    this.carSearchFrom = this.fromBuilder.group({
      location: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
      driverAge: ['', Validators.required]
    });
  }

  submit() {
    this.carService.setSearchInfo(this.carSearchFrom.getRawValue());
    this.router.navigate(['/car-list'])
  }

}
