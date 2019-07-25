import { FoodLayout } from './../../../../../model/food.layout';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {
  
  @Output() singleFood = new EventEmitter<void>()

  @Input()
  FoodLayout:FoodLayout

  constructor() {}

  ngOnInit() {
  }
  
  onFoodSelected(){
    this.singleFood.emit()
  }

}
