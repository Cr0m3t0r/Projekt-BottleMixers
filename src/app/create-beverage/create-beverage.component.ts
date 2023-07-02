import { Component } from '@angular/core';
import { Beverage } from '../models/Beverage';
import { DTOBeverage } from '../models/DTOBeverage';
import { BeverageService } from '../services/beverageService';


@Component({
  selector: 'app-create-beverage',
  templateUrl: './create-beverage.component.html',
  styleUrls: ['./create-beverage.component.css']
})
export class CreateBeverageComponent {
  public dtoBeverage: DTOBeverage = {
    name: '',
    image: '',
    liter: 0,
    price: 0,
    quantity: 0,
    description: ''
  };
  beverageIdToDelete: number = 0;

  constructor(private beverageService: BeverageService) { }

  onSubmit() {


    this.beverageService.createBeverage(this.dtoBeverage).subscribe(response => {
      console.log('Beverage created:', response);
    }, error => {
      console.error('Error creating beverage:', error);
    });
  }

  deleteBeverage() {
    if (!this.beverageIdToDelete) {
      console.log('Please enter a beverage ID');
      return;
    }

    this.beverageService.deleteBeverage(this.beverageIdToDelete)
      .subscribe(
        () => {
          console.log('Beverage deleted successfully');
        },
        error => {
          console.error('Error deleting beverage:', error);
        }
      );
  }
}


