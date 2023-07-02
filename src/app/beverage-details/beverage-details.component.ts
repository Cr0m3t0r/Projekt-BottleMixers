import {Component, OnInit} from '@angular/core';
import {Beverage} from "../models/Beverage";
import {ActivatedRoute} from "@angular/router";
import {BeverageService} from "../services/beverageService";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-beverage-details',
  templateUrl: './beverage-details.component.html',
  styleUrls: ['./beverage-details.component.css']
})
export class BeverageDetailsComponent implements OnInit {
  beverage!: Beverage;

  constructor(
    private route: ActivatedRoute,
    private beverageService: BeverageService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const beverageId = +id;
        this.beverage = this.beverageService.getBeverageById(beverageId);
      }
    });
  }

}
