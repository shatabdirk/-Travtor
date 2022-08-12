import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { CarService } from './car.service';
const router = {
  navigate: jasmine.createSpy('navigate')
};
describe('AppComponent', () => {
  beforeEach(async () => {
   
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [
        CarService,
        {provide: Router, useValue: router},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('should navigate', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.tabclickListenr(app.tabList[0]);
    expect(router.navigate).toHaveBeenCalledWith(['car-search'])
  });
});
