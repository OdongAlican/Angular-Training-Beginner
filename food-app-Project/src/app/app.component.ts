import { FoodLayouts } from './../data/food.layout';
import { FoodLayout } from './model/food.layout';

import { Categories } from '../data/data.set';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Categories:[] = Categories;
  // FoodLayouts:[] = FoodLayouts
  FoodLayouts = [
  //   {id:FoodLayouts[0].id, image:FoodLayouts[0].image, cost:FoodLayouts[0].cost},
  // {id:FoodLayouts[1].id, image:FoodLayouts[1].image, cost:FoodLayouts[1].cost}
]
  
displayFoodlayout(food:FoodLayout){
    console.log('what tha heck')
    this.FoodLayouts.push(FoodLayouts[6])
  }
}
