import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { CarSearchComponent } from './car-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
const router = {
  navigate: jasmine.createSpy('navigate')
};
describe('CarSearchComponent', () => {
  let component: CarSearchComponent;
  let fixture: ComponentFixture<CarSearchComponent>;
  let carService: CarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSearchComponent ],
      imports: [ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatInputModule, BrowserAnimationsModule],
      providers: [
        CarService,
        {provide: Router, useValue: router},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSearchComponent);
    component = fixture.componentInstance;
    carService = TestBed.inject(CarService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create from with validation', () => {
    expect(component.carSearchFrom.controls['location'].valid).toBeFalsy();
    expect(component.carSearchFrom.controls['fromDate'].valid).toBeFalsy();
    expect(component.carSearchFrom.controls['toDate'].valid).toBeFalsy();
    expect(component.carSearchFrom.controls['fromTime'].valid).toBeFalsy();
    expect(component.carSearchFrom.controls['toTime'].valid).toBeFalsy();
    expect(component.carSearchFrom.controls['driverAge'].valid).toBeFalsy();
    expect(component.carSearchFrom.valid).toBeFalsy();
  });

  it('should natvigate', () => {
    component.carSearchFrom.patchValue({
      location: 'Pune',
      fromDate: new Date(),
      toDate: new Date(),
      fromTime: '10:30',
      toTime: '11:20',
      driverAge: '23'
    });
    fixture.detectChanges();
    expect(component.carSearchFrom.valid).toBeTruthy();
    component.submit();
    expect(router.navigate).toHaveBeenCalledOnceWith(['/car-list']);
  });
});
