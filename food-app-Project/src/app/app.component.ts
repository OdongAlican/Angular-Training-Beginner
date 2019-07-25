
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
  
  selectedFood: FoodLayout 
}
