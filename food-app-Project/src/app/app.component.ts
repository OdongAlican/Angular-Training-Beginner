
import { Categories } from '../data/data.set';
import { Component } from '@angular/core';
import { FoodLayouts } from 'src/data/food.layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Categories:[] = Categories;
  FoodLayouts:[] = FoodLayouts

}
