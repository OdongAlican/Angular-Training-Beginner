import { Category } from './../../model/category';
import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  

  @Input()
  Category:Category

  constructor() { }

  ngOnInit() {
  }

}
