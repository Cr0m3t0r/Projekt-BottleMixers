import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BeverageOverviewComponent } from './beverage-overview/beverage-overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";
import { BeverageDetailsComponent } from './beverage-details/beverage-details.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'beverage/:id', component: BeverageDetailsComponent},
  {path: "beverages", component:BeverageOverviewComponent},
  {path: "", redirectTo: "/beverages", pathMatch:"full"},
];

@NgModule({
  declarations: [
    AppComponent,
    BeverageOverviewComponent,
    BeverageDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
