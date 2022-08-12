import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTab } from '@angular/material/tabs';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event', () => {
    spyOn(component.tabclick, 'emit');
    component.tabList = [{
      lable: 'first',
      iconName: 'first-icon',
      emitValue: 'first-event'
    }];
    component.action({index: 0});
    expect(component.tabclick.emit).toHaveBeenCalledWith({
      lable: 'first',
      iconName: 'first-icon',
      emitValue: 'first-event'
    });
  });
});
