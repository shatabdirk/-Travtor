import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { car_list } from './car-list.const';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  searchInfo$ = new Subject();
  carList = car_list.CarItineraries;

  constructor() { }

  setSearchInfo(searchInfo: any) {
    this.searchInfo$.next(searchInfo);
  }

  getSerachInfo() {
    return this.searchInfo$;
  }

  filterList (sorting: string) {
    switch(sorting) {
      case 'highest': 
        return this.carList.sort((prev, next) => next.fare.totalAmount - prev.fare.totalAmount);
      case 'rentalAscending':
        return this.carList.sort((prev, next) => { 
          if (prev.vehicle.name < next.vehicle.name) {
          return -1;
          }
          if (prev.vehicle.name > next.vehicle.name) {
              return 1;
          }
          return 0;
        });
      case 'rentalDesc':
       return this.carList.sort((prev, next) => { 
          if (prev.vehicle.name > next.vehicle.name) {
          return -1;
          }
          if (prev.vehicle.name < next.vehicle.name) {
              return 1;
          }
          return 0;
        });
        return this.carList;
      case 'typeAsc': 
        return this.carList.sort((prev, next) => { 
          if (prev.vehicle.type < next.vehicle.type) {
          return -1;
          }
          if (prev.vehicle.type > next.vehicle.type) {
              return 1;
          }
          return 0;
        });
      case 'typeDesc':
        return this.carList.sort((prev, next) => { 
          if (prev.vehicle.type > next.vehicle.type) {
          return -1;
          }
          if (prev.vehicle.type < next.vehicle.type) {
              return 1;
          }
          return 0;
        });
      default:
        return this.carList.sort((prev, next) => prev.fare.totalAmount - next.fare.totalAmount);
    }
  }

}
