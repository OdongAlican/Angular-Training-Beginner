import { Component, OnInit, Input } from '@angular/core';
import { SideCategoryItem } from 'src/app/model/siteCategoryItem';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input()
  SideCategoryItem:SideCategoryItem

  constructor() { }

  ngOnInit() {
  }

}
