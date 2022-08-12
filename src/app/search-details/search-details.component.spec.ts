import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsComponent } from './search-details.component';

describe('SearchDetailsComponent', () => {
  let component: SearchDetailsComponent;
  let fixture: ComponentFixture<SearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDetailsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailsComponent);
    component = fixture.componentInstance;
    component.searchInfo = {"location":"zds","fromDate":"2022-08-03T18:30:00.000Z","toDate":"2022-08-03T18:30:00.000Z","fromTime":"02:13","toTime":"02:14","driverAge":"22"}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
