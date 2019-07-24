import { FoodLayouts } from './../../../data/food.layout';
import { FoodLayout } from './../../model/food.layout';
import { SideCategory } from './../../model/sideCategory';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { sideCategoryItems} from 'src/data/category.data';
import { sideCategories } from 'src/data/side-category-data';

@Component({
  selector: 'app-central-section',
  templateUrl: './central-section.component.html',
  styleUrls: ['./central-section.component.css']
})
export class CentralSectionComponent implements OnInit {

  sideCategoryItems:[] = sideCategoryItems

  @Output() samplefood = new EventEmitter<FoodLayout>()

  sideCategories:[] = sideCategories
  @Input()
  SideCategory:SideCategory

  constructor() { }

  ngOnInit() {
  }
  
  createSampleFood(){
    this.samplefood.emit(FoodLayouts[0])
    console.log('central component')
  }

  }
