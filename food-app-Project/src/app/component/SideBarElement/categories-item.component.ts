import { FoodLayout } from './../../model/food.layout';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SideCategoryItem } from 'src/app/model/siteCategoryItem';
import { FoodLayouts } from 'src/data/food.layout';
@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {

  @Output()
  newfoodCreated = new EventEmitter<FoodLayout>()

  @Input()
  SideCategoryItem:SideCategoryItem

  constructor() {}

  ngOnInit() {
  }
  
  foodCreated(foodData:SideCategoryItem){
    this.newfoodCreated.emit(
      {id:FoodLayouts[0].id, 
        image:FoodLayouts[0].image, 
        cost:FoodLayouts[0].cost
    })
  }

}
