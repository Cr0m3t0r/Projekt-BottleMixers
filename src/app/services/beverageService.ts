import {Injectable} from "@angular/core";
import {Beverage} from "../models/Beverage";
import {NotFoundException} from "../models/NotFoundException";

@Injectable({
  providedIn: 'root'
})
export class BeverageService {
  private beverageList: Beverage[] = [
    new Beverage(1, 'Wasser', 'https://files.promostore.de/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/g/o/2f9be60ea71f9089485228e6f997e824/Werbeartikel-Mineralwasser-05l-Gourmet-9362474228.png', 1, 3.99, 15, "Es ist Wasser"),
    new Beverage(2, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.5, 1.99, 50, "Es ist Cola."),
    new Beverage(3, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.5, 1.99, 50, "Es ist Cola."),
    new Beverage(4, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.5, 1.99, 50, "Es ist Cola."),
    new Beverage(5, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.5, 1.99, 50, "Es ist Cola."),
    new Beverage(6, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.5, 1.99, 50, "Es ist Cola."),
    new Beverage(7, "Cola", "https://img.rewe-static.de/6729673/5904320_digital-image.png?impolicy=s-products&imwidth=540&output-format=image/webp", 1.5, 1.99, 50, "Es ist Cola.")
  ];

  constructor() {
  }

  getBeverages(): Beverage[] {
    return this.beverageList;
  }

  getBeverageById(id: number): Beverage {
    let targetBeverage = this.beverageList.find(beverage => beverage.id === id);
    if (!targetBeverage) {
      throw new NotFoundException("Beverage not Found.")
    }
    return targetBeverage;
  }
}


