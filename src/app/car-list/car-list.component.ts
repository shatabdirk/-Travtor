import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarService } from '../car.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: any;
  sorting = 'lowest';
  constructor(private carService: CarService, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.carList = this.carService.filterList('lowest');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {data: {sorting: this.sorting}});
    dialogRef.afterClosed().subscribe(result => {
      this.carList = this.carService.filterList(result);
      this.sorting = result;
    });
  }

}
