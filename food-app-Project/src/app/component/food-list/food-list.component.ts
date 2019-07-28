import { FoodLayout } from 'src/app/model/food.layout';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FoodLayouts } from 'src/data/food.layout';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foodWasSelected:FoodLayout
 
  @Output()
  oneSingleFood = new EventEmitter<FoodLayout>()
  
  constructor() { }

  ngOnInit() {
  }

  foodWasSelectedOnce(food:FoodLayout){
    this.foodWasSelected = food
  }

}
