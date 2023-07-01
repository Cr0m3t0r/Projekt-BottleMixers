import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BeverageOverviewComponent } from './beverage-overview/beverage-overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    BeverageOverviewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
