import {Component, OnInit} from '@angular/core';
import {Beverage} from "../models/Beverage";
import {ActivatedRoute, Router} from "@angular/router";
import {BeverageService} from "../services/beverageService";

@Component({
  selector: 'app-beverage-details',
  templateUrl: './beverage-details.component.html',
  styleUrls: ['./beverage-details.component.css']
})
export class BeverageDetailsComponent implements OnInit {
  beverage!: Beverage;

  constructor(
    private route: ActivatedRoute,
    private beverageService: BeverageService,
    private router: Router
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

  public returnToOverview(): void {
    this.router.navigate(['/beverages']);
  }

}
