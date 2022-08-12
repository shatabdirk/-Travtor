import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './car.service';
import { TabConfig } from './tab/tab.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'travtor';
  tabList: TabConfig[] = [
    {
      lable: 'Car',
      iconName: 'local_taxi',
      emitValue: 'car-search',
    },
    {
      lable: 'Flight',
      iconName: 'flight',
      emitValue: 'flight-search',
    },
    {
      lable: 'Hotels',
      iconName: 'hotel',
      emitValue: 'hotle-search',
    },
    {
      lable: 'Cruises',
      iconName: 'directions_boat',
      emitValue: 'cruise-search',
    },
  ];

  subscription: any;
  searchInfo: any;
  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['']);
    this.subscription = this.carService
      .getSerachInfo()
      .subscribe((searchInfo) => {
        this.searchInfo = searchInfo;
      });
  }

  tabclickListenr(event: TabConfig) {
    this.router.navigate([event.emitValue]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
