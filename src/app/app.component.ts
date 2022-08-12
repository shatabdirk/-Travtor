import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './car.service';
import { TabConfig } from './tab/tab.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'travtor';

  tabList: TabConfig[] = [{
    lable: 'Car',
    iconName: 'local_taxi',
    emitValue: 'car-search'
  },{
    lable: 'Flight',
    iconName: 'flight',
    emitValue: 'flight-search'
  },{
    lable: 'Hotels',
    iconName: 'hotel',
    emitValue: 'hotle-search'
  },{
    lable: 'Cruises',
    iconName: 'directions_boat',
    emitValue: 'cruise-search'
  }]

  searchInfo: any;
  tabclickListenr(event: TabConfig){
    this.router.navigate([event.emitValue])
  }

  constructor(private carService: CarService, private router: Router) {

  }

  ngOnInit(): void {
    this.router.navigate([''])
    this.carService.getSerachInfo().subscribe((searchInfo) => {
      this.searchInfo = searchInfo;
    });
  }

  
}
