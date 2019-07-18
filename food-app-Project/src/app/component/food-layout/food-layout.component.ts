import { FoodLayout } from './../../model/food.layout';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-layout',
  templateUrl: './food-layout.component.html',
  styleUrls: ['./food-layout.component.css']
})
export class FoodLayoutComponent implements OnInit {

  @Input()
  FoodLayout:FoodLayout
  
  constructor() { }

  ngOnInit() {
  }

}
