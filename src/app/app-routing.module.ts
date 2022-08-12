import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CarListComponent } from "./car-list/car-list.component";
import { CarSearchComponent } from "./car-search/car-search.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

const route:Route[] = [
    {
        path: '',
        redirectTo: 'car-list',
        pathMatch:'full'
    }, {
        path: 'car-search',
        component: CarSearchComponent
    },
    {
        path: 'car-list',
        component: CarListComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRoutingModule { }