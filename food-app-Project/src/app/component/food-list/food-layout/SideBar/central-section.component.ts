import { FoodLayout } from 'src/app/model/food.layout';
import { sideCategories } from './../../../../../data/side-category-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodLayouts } from 'src/data/food.layout';

@Component({
  selector: 'app-central-section',
  templateUrl: './central-section.component.html',
  styleUrls: ['./central-section.component.css']
})
export class CentralSectionComponent implements OnInit {
FoodLayouts:[] = FoodLayouts
sideCategories:[] = sideCategories


@Output() samplefood = new EventEmitter<FoodLayout>()
@Output() sampleTwofood = new EventEmitter<FoodLayout>()

  constructor() { }

  ngOnInit() {
  }
  
  createSampleFood(food:FoodLayout){
    this.samplefood.emit(food)
  }

  createTwoSampleFood(food:FoodLayout){
    this.sampleTwofood.emit(food)
  }

  }
