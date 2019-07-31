import { FoodLayout } from './../../../../../model/food.layout';

import { Component, OnInit, Input} from '@angular/core';
import { FoodLayouts } from 'src/data/food.sevice';
@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {

  @Input()
  FoodLayout:FoodLayout

  constructor(private foodLayouts:FoodLayouts) {}

  ngOnInit() {
  }

  onFoodSelected(){
    this.foodLayouts.foodSelected.emit(this.FoodLayout)
  }
  
}
