import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { TopBarComponent } from './top-bar/top-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CarSearchComponent } from './car-search/car-search.component';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {MatDividerModule} from '@angular/material/divider';
import { FilterComponent } from './filter/filter.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export function initApp(http: HttpClient, translate: TranslateService) {
  return () => new Promise<boolean>((resolve: (res: boolean) => void) => {

    const defaultLocale = 'es';

    http.get(`/assets/i18n/es-PR.json`).pipe(
      catchError(() => of(null))
    ).subscribe((devKeys: any) => {
      translate.setTranslation(defaultLocale, devKeys || {});

      translate.setDefaultLang(defaultLocale);
      translate.use(defaultLocale);

      resolve(true);
    });
  });
}

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TopBarComponent,
    CarSearchComponent,
    CarListComponent,
    SearchDetailsComponent,
    ErrorPageComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    TranslateModule.forRoot(),
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    deps: [HttpClient, TranslateService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
