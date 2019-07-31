import { FoodLayout } from 'src/app/model/food.layout';
import { Component, OnInit} from '@angular/core';
import { FoodLayouts } from 'src/data/food.sevice';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers:[FoodLayouts]
})
export class FoodListComponent implements OnInit {

  foodWasSelected:FoodLayout

  FoodLayouts:FoodLayout[] 


  
  constructor(private foodLayouts:FoodLayouts) { }

  ngOnInit() {
    this.foodLayouts.foodSelected
    .subscribe(
      (FoodLayout:FoodLayout)=>{
        this.foodWasSelected = FoodLayout
      }

    )

    this.FoodLayouts = this.foodLayouts.getfoodsLayout()
  }


}
