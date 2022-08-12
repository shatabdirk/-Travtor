import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TabConfig } from './tab.modal';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input()
  tabList!: TabConfig[];

  @Output()
  tabclick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  action(event: any) {
    this.tabclick.emit(this.tabList[event.index]);
  }

}
