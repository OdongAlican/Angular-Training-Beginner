
import { sideCategories } from '../data/side-category-data';
import { Categories } from '../data/data.set';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Categories:[] = Categories;
  sideCategories:[] = sideCategories
}
