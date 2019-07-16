import { Component, OnInit, Input } from '@angular/core';
import { SideCategoryItem } from 'src/app/model/siteCategoryItem';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css']
})
export class CategoriesItemComponent implements OnInit {

  @Input()
  SideCategoryItem:SideCategoryItem
  
  constructor() { }

  ngOnInit() {
  }

}
