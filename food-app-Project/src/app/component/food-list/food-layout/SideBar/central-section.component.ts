import { FoodLayout } from 'src/app/model/food.layout';
import { sideCategories } from './../../../../../data/side-category-data';
import { Component, OnInit} from '@angular/core';
import { FoodLayouts } from 'src/data/food.sevice';

@Component({
  selector: 'app-central-section',
  templateUrl: './central-section.component.html',
  styleUrls: ['./central-section.component.css']
})
export class CentralSectionComponent implements OnInit {
FoodLayouts:FoodLayout[] 
sideCategories:[] = sideCategories

  constructor(private foodLayouts:FoodLayouts) { }

  ngOnInit() {
    this.FoodLayouts = this.foodLayouts.getfoodsLayout()
  }
  }
