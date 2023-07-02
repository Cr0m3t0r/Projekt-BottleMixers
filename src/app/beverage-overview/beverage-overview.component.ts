import {Component, OnInit} from '@angular/core';
import {Beverage} from "../models/Beverage";
import {BeverageService} from "../services/beverageService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-beverage-overview',
  templateUrl: './beverage-overview.component.html',
  styleUrls: ['./beverage-overview.component.css']
})
export class BeverageOverviewComponent implements OnInit {
  public beverageList: Beverage[] = [];

  constructor(private beverageService: BeverageService, private router: Router) {

  }

  ngOnInit(): void {
    this.beverageList = this.beverageService.getBeverages();
  }

  showBeverage(id: number): void {
    this.router.navigate(["/beverage", id]);
  }
}
