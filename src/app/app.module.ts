import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BeverageOverviewComponent } from './beverage-overview/beverage-overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { BeverageDetailsComponent } from './beverage-details/beverage-details.component';
import { RouterModule, Routes } from "@angular/router";
import { CreateBeverageComponent } from './create-beverage/create-beverage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'

const routes: Routes = [
  { path: 'beverage/:id', component: BeverageDetailsComponent },
  { path: "beverages", component: BeverageOverviewComponent },
  { path: "", redirectTo: "/beverages", pathMatch: "full" },
  { path: "createbeverage", component: CreateBeverageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BeverageOverviewComponent,
    BeverageDetailsComponent,
    CreateBeverageComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
