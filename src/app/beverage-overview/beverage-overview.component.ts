import { Component } from '@angular/core';
import {Beverage} from "../models/Beverage";

@Component({
  selector: 'app-beverage-overview',
  templateUrl: './beverage-overview.component.html',
  styleUrls: ['./beverage-overview.component.css']
})
export class BeverageOverviewComponent {
  public beverageList: Beverage[] = [
    new Beverage(1, 'Wasser','https://files.promostore.de/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/g/o/2f9be60ea71f9089485228e6f997e824/Werbeartikel-Mineralwasser-05l-Gourmet-9362474228.png', 3.99, 15),
    new Beverage(2, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.99, 50),
    new Beverage(3, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.99, 50),
    new Beverage(4, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.99, 50),
    new Beverage(5, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.99, 50),
    new Beverage(6, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.99, 50),
    new Beverage(7, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.99, 50)
  ]

  showBeverage(id: number){

  }
}
